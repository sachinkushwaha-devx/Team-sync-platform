import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { getAllowedOrigins } from "./config.js";
import authRoutes from "./routes/auth.js";

export const createApp = () => {
  const app = express();
  const allowedOrigins = getAllowedOrigins();

  app.disable("x-powered-by");
  app.use(helmet());
  app.use(cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));
  app.use(express.json({ limit: "20kb" }));
  app.use(cookieParser());

  app.get("/api/health", (_req, res) => {
    res.json({ success: true, status: "ok" });
  });
  app.use("/api/auth", authRoutes);

  app.use((_req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
  });

  app.use((error, _req, res, _next) => {
    if (error.message === "Origin is not allowed by CORS") {
      return res.status(403).json({ success: false, message: error.message });
    }
    if (error instanceof SyntaxError && "body" in error) {
      return res.status(400).json({ success: false, message: "Invalid JSON request body" });
    }
    console.error("API error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  });

  return app;
};
