import { Router } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();
const passwordHashRounds = 12;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const editableFields = ["fullName", "bio", "department", "role", "status", "avatar", "joiningDate"];

const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Administrator access required" });
  }
  return next();
};

const toPublicEmployee = (user) => ({
  _id: user._id.toString(),
  id: user._id.toString(),
  name: user.fullName,
  fullName: user.fullName,
  email: user.email,
  role: user.role,
  bio: user.bio,
  department: user.department,
  status: user.status || "active",
  avatar: user.avatar,
  joiningDate: user.joiningDate,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

router.use(authenticate, requireAdmin);

router.get("/", async (req, res, next) => {
  try {
    const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 20));
    const filter = {};

    if (["admin", "employee"].includes(req.query.role)) filter.role = req.query.role;
    if (req.query.status === "active") {
      filter.$or = [{ status: "active" }, { status: { $exists: false } }];
    } else if (req.query.status === "inactive") {
      filter.status = "inactive";
    }
    if (typeof req.query.department === "string" && req.query.department.trim()) {
      filter.department = req.query.department.trim();
    }
    if (typeof req.query.search === "string" && req.query.search.trim()) {
      const search = new RegExp(escapeRegex(req.query.search.trim()), "i");
      filter.$and = [
        ...(filter.$or ? [{ $or: filter.$or }] : []),
        { $or: [{ fullName: search }, { email: search }] },
      ];
      delete filter.$or;
    }

    const [users, total] = await Promise.all([
      User.find(filter)
        .select("fullName email role bio department status avatar joiningDate createdAt updatedAt")
        .sort({ createdAt: -1, _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      User.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      data: {
        employees: users.map(toPublicEmployee),
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
      },
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const fullName = typeof req.body?.name === "string"
      ? req.body.name.trim()
      : typeof req.body?.fullName === "string"
        ? req.body.fullName.trim()
        : "";
    const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body?.password === "string" ? req.body.password : "";
    const role = req.body?.role || "employee";

    if (fullName.length < 3 || fullName.length > 100) {
      return res.status(400).json({ success: false, message: "Name must be between 3 and 100 characters" });
    }
    if (!emailPattern.test(email) || email.length > 254) {
      return res.status(400).json({ success: false, message: "Enter a valid email address" });
    }
    if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters and no more than 72 bytes" });
    }
    if (!["employee", "admin"].includes(role)) {
      return res.status(400).json({ success: false, message: "Role must be employee or admin" });
    }
    if (req.body?.status && !["active", "inactive"].includes(req.body.status)) {
      return res.status(400).json({ success: false, message: "Status must be active or inactive" });
    }

    const passwordHash = await bcrypt.hash(password, passwordHashRounds);
    const user = await User.create({
      fullName,
      email,
      passwordHash,
      role,
      bio: req.body?.bio ?? "",
      department: req.body?.department ?? "",
      status: req.body?.status || "active",
      avatar: req.body?.avatar ?? "",
      joiningDate: req.body?.joiningDate || null,
    });

    return res.status(201).json({
      success: true,
      message: "Employee created",
      data: toPublicEmployee(user),
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ success: false, message: "An account with this email already exists" });
    }
    return next(error);
  }
});

router.patch("/update/:id", async (req, res, next) => {
  try {
    const updates = {};
    for (const field of editableFields) {
      if (req.body?.[field] !== undefined) updates[field] = req.body[field];
    }
    if (req.body?.name !== undefined && req.body?.fullName === undefined) {
      updates.fullName = req.body.name;
    }
    if (req.body?.email !== undefined) {
      if (typeof req.body.email !== "string" || !emailPattern.test(req.body.email.trim())) {
        return res.status(400).json({ success: false, message: "Enter a valid email address" });
      }
      updates.email = req.body.email.trim().toLowerCase();
    }
    if (updates.fullName !== undefined) {
      if (typeof updates.fullName !== "string" || updates.fullName.trim().length < 3 || updates.fullName.trim().length > 100) {
        return res.status(400).json({ success: false, message: "Name must be between 3 and 100 characters" });
      }
      updates.fullName = updates.fullName.trim();
    }
    if (updates.role !== undefined && !["employee", "admin"].includes(updates.role)) {
      return res.status(400).json({ success: false, message: "Role must be employee or admin" });
    }
    if (updates.status !== undefined && !["active", "inactive"].includes(updates.status)) {
      return res.status(400).json({ success: false, message: "Status must be active or inactive" });
    }
    if (req.body?.password !== undefined) {
      if (typeof req.body.password !== "string" || req.body.password.length < 8 || Buffer.byteLength(req.body.password, "utf8") > 72) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters and no more than 72 bytes" });
      }
      updates.passwordHash = await bcrypt.hash(req.body.password, passwordHashRounds);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select("fullName email role bio department status avatar joiningDate createdAt updatedAt");

    if (!user) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }
    return res.json({ success: true, data: toPublicEmployee(user) });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ success: false, message: "An account with this email already exists" });
    }
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      return res.status(400).json({ success: false, message: "You cannot delete your own administrator account" });
    }

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }
    return res.json({ success: true, message: "Employee deleted" });
  } catch (error) {
    return next(error);
  }
});

export default router;
