import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { rateLimit } from "express-rate-limit";
import { User } from "../models/User.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();
const ACCESS_TOKEN_TTL = "15m";
const REFRESH_TOKEN_TTL = "7d";
const ACCESS_COOKIE_MAX_AGE = 15 * 60 * 1000;
const REFRESH_COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;
const passwordHashRounds = 12;

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { success: false, message: "Too many authentication attempts. Try again later." },
});

const cookieOptions = (maxAge) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge,
  path: "/",
});

const publicUser = (user) => ({
  _id: user._id.toString(),
  id: user._id.toString(),
  fullName: user.fullName,
  name: user.fullName,
  email: user.email,
  role: user.role,
});

const setAuthCookies = (res, userId) => {
  const accessToken = jwt.sign(
    { sub: userId.toString(), type: "access" },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_TOKEN_TTL }
  );
  const refreshToken = jwt.sign(
    { sub: userId.toString(), type: "refresh" },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_TTL }
  );

  res.cookie("accessToken", accessToken, cookieOptions(ACCESS_COOKIE_MAX_AGE));
  res.cookie("refreshToken", refreshToken, cookieOptions(REFRESH_COOKIE_MAX_AGE));
};

const clearAuthCookies = (res) => {
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  };

  res.clearCookie("accessToken", options);
  res.clearCookie("refreshToken", options);
};

router.post("/register", authLimiter, async (req, res, next) => {
  try {
    const fullName = typeof req.body?.fullName === "string" ? req.body.fullName.trim() : "";
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";

    if (fullName.length < 3 || fullName.length > 100) {
      return res.status(400).json({ success: false, message: "Name must be between 3 and 100 characters" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return res.status(400).json({ success: false, message: "Enter a valid email address" });
    }
    if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters and no more than 72 bytes" });
    }

    const passwordHash = await bcrypt.hash(password, passwordHashRounds);
    const user = await User.create({ fullName, email, passwordHash, role: "employee" });

    return res.status(201).json({
      success: true,
      message: "Account created. Please sign in.",
      data: publicUser(user),
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ success: false, message: "An account with this email already exists" });
    }
    return next(error);
  }
});

router.post("/login", authLimiter, async (req, res, next) => {
  try {
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+passwordHash");
    const passwordMatches = user && await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    setAuthCookies(res, user._id);
    return res.json({ success: true, message: "Signed in", data: publicUser(user) });
  } catch (error) {
    return next(error);
  }
});

router.get("/me", authenticate, (req, res) => {
  res.json({ success: true, data: publicUser(req.user) });
});

router.get("/get-accessToken", async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ success: false, message: "Refresh session expired" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    if (payload.type !== "refresh") {
      return res.status(401).json({ success: false, message: "Invalid refresh session" });
    }

    const user = await User.findById(payload.sub).select("_id");
    if (!user) {
      clearAuthCookies(res);
      return res.status(401).json({ success: false, message: "User account was not found" });
    }

    const accessToken = jwt.sign(
      { sub: user._id.toString(), type: "access" },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: ACCESS_TOKEN_TTL }
    );
    res.cookie("accessToken", accessToken, cookieOptions(ACCESS_COOKIE_MAX_AGE));
    return res.json({ success: true, message: "Session refreshed" });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
      clearAuthCookies(res);
      return res.status(401).json({ success: false, message: "Refresh session expired" });
    }
    return next(error);
  }
});

router.post("/logout", (req, res) => {
  clearAuthCookies(res);
  res.json({ success: true, message: "Signed out" });
});

export default router;
