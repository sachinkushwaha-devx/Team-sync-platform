import React, { useState } from "react";
import {
  Cloud,
  GitBranch,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { useAuth } from "../hooks/Useauth.jsx";

const Login = () => {
  const { register, handleSubmit, errors, onLoginSubmit } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#100e13] text-white">

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden">

        {/* Left bottom glow */}
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-purple-700/[0.05] blur-[100px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.015] blur-[120px]" />

        {/* Right bottom decoration */}
        <div className="absolute bottom-[-20px] right-[12px] hidden h-[170px] w-[165px] overflow-hidden rounded-lg bg-[#0d0c10] sm:block">

          <div className="absolute left-8 top-10 h-20 w-28 rotate-[-20deg] rounded-[50%] border border-purple-300/[0.12]" />

          <div className="absolute left-5 top-12 h-16 w-32 rotate-[15deg] rounded-[50%] border border-purple-300/[0.08]" />

          <div className="absolute left-12 top-7 h-24 w-20 rotate-[45deg] rounded-[50%] border border-purple-400/[0.08]" />

          <div className="absolute left-14 top-8 h-16 w-16 rounded-full border border-purple-300/[0.07] blur-[2px]" />

        </div>
      </div>


      {/* ================= PAGE ================= */}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">

        {/* Login Card */}
        <div className="w-[288px] rounded-lg bg-[#1b191e] px-[21px] pb-[23px] pt-[21px] shadow-[0_25px_70px_rgba(0,0,0,0.25)]">

          {/* Logo */}
          <div className="flex justify-center">

            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#7550b9] shadow-[0_5px_20px_rgba(117,80,185,0.25)]">
              <span className="text-[17px] font-bold">
                ✣
              </span>
            </div>

          </div>


          {/* Heading */}
          <div className="mt-3 text-center">

            <h1 className="text-[16px] font-bold tracking-tight">
              Synthetix AI
            </h1>

            <p className="mt-[2px] text-[9px] text-[#d0c9d8]">
              Sign in to your workspace
            </p>

          </div>


          {/* Social Buttons */}
          <div className="mt-[20px] grid grid-cols-2 gap-[10px]">

            <button
              type="button"
              className="flex h-[27px] items-center justify-center gap-2 rounded-[5px] bg-[#29272d] text-[8px] font-semibold transition hover:bg-[#343139]"
            >
              <Cloud size={12} strokeWidth={1.8} />
              GOOGLE
            </button>

            <button
              type="button"
              className="flex h-[27px] items-center justify-center gap-2 rounded-[5px] bg-[#29272d] text-[8px] font-semibold transition hover:bg-[#343139]"
            >
              <GitBranch size={12} strokeWidth={1.8} />
              GITHUB
            </button>

          </div>


          {/* Divider */}
          <div className="my-[23px] flex items-center gap-2">

            <div className="h-px flex-1 bg-[#2b292f]" />

            <span className="text-[7px] text-[#d2cadb]">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-[#2b292f]" />

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            className="space-y-[16px]"
          >

            {/* Email */}
            <div>

              <label className="mb-[7px] block text-[7px] font-bold uppercase tracking-wide">
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`h-[27px] w-full rounded-[4px] bg-[#0c0b0f] px-[9px] text-[9px] text-white outline-none placeholder:text-[#514d58] ${
                  errors.email
                    ? "border border-red-500"
                    : "border border-transparent focus:border-[#7651b9]"
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-[7px] text-red-400">
                  {errors.email.message}
                </p>
              )}

            </div>


            {/* Password */}
            <div>

              <div className="mb-[7px] flex items-center justify-between">

                <label className="text-[7px] font-bold uppercase tracking-wide">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[7px] text-[#c3a1ff] hover:underline"
                >
                  Forgot password?
                </button>

              </div>


              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className={`h-[27px] w-full rounded-[4px] bg-[#0c0b0f] px-[9px] pr-8 text-[9px] text-white outline-none placeholder:text-[#514d58] ${
                    errors.password
                      ? "border border-red-500"
                      : "border border-transparent focus:border-[#7651b9]"
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#55505d]"
                >
                  {showPassword ? (
                    <EyeOff size={11} />
                  ) : (
                    <Eye size={11} />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="mt-1 text-[7px] text-red-400">
                  {errors.password.message}
                </p>
              )}

            </div>


            {/* Remember */}
            <label className="flex cursor-pointer items-center gap-2">

              <input
                type="checkbox"
                {...register("rememberMe")}
                className="h-[11px] w-[11px] accent-[#7651b9]"
              />

              <span className="text-[7px] text-white">
                Stay signed in
              </span>

            </label>


            {/* Sign In */}
            <button
              type="submit"
              className="flex h-[34px] w-full items-center justify-center gap-2 rounded-[5px] bg-[#7151b4] text-[9px] font-semibold text-white shadow-[0_4px_15px_rgba(113,81,180,0.18)] transition hover:bg-[#805fc3] active:scale-[0.99]"
            >
              Sign In
              <LogIn size={12} />
            </button>

          </form>


          {/* Bottom Divider */}
          <div className="mt-[20px] border-t border-[#29272d]" />


          {/* Signup */}
          <p className="mt-[19px] text-center text-[10px] text-[#e0dbe5]">

            Don't have an account?{" "}

            <button
              type="button"
              className="font-semibold text-[#c5a5ff] hover:underline"
            >
              Sign Up
            </button>

          </p>

        </div>


        {/* Footer */}
        <div className="mt-[16px] text-center">

          <p className="text-[9px] text-[#5b5662]">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

          <div className="mt-[7px] flex justify-center gap-4">

            <button className="text-[8px] text-[#5b5662] hover:text-gray-300">
              Privacy Policy
            </button>

            <button className="text-[8px] text-[#5b5662] hover:text-gray-300">
              Terms of Service
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;