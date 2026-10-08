import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["employee", "admin"],
      default: "employee",
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },
    department: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    avatar: {
      type: String,
      trim: true,
      maxlength: 2048,
      default: "",
    },
    joiningDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
