const requiredEnvironmentVariables = [
  "MONGODB_URI",
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
];

export const validateEnvironment = (env = process.env) => {
  const missing = requiredEnvironmentVariables.filter((name) => !env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }

  for (const name of ["JWT_ACCESS_SECRET", "JWT_REFRESH_SECRET"]) {
    if (Buffer.byteLength(env[name]) < 32) {
      throw new Error(`${name} must be at least 32 bytes long`);
    }
  }
};

export const getAllowedOrigins = (env = process.env) => {
  const configuredOrigins = (env.FRONTEND_URL ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (env.NODE_ENV !== "production") {
    configuredOrigins.push("http://localhost:5173", "http://127.0.0.1:5173");
  }

  return [...new Set(configuredOrigins)];
};
