import "dotenv/config";
import mongoose from "mongoose";
import { createApp } from "./app.js";
import { validateEnvironment } from "./config.js";

const startServer = async () => {
  validateEnvironment();
  await mongoose.connect(process.env.MONGODB_URI);

  const app = createApp();
  const port = Number(process.env.PORT) || 4000;
  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Team Sync API listening on port ${port}`);
  });

  const shutdown = async (signal) => {
    console.log(`${signal} received; shutting down API`);
    server.close(async (error) => {
      if (error) {
        console.error("HTTP server shutdown failed:", error);
        process.exitCode = 1;
      }
      await mongoose.disconnect();
    });
  };

  process.once("SIGINT", () => shutdown("SIGINT"));
  process.once("SIGTERM", () => shutdown("SIGTERM"));
};

startServer().catch((error) => {
  console.error("API startup failed:", error);
  process.exitCode = 1;
});
