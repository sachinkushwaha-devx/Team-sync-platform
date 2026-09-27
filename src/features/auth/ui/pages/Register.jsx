import React from "react";
import {
  User,
  Mail,  
  LockKeyhole,
  Check,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../hooks/Useauth.jsx";

function Register() {
  const { register, handleSubmit, watch, errors, onRegisterSubmit, navigate

   } = useAuth();
  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const passwordStrength = () => {
    if (!password) return 0;

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = passwordStrength();

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-3 py-3 text-white sm:px-5 sm:py-4">

      {/* Main outer frame */}
      <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-[1350px] flex-col overflow-hidden rounded-[28px] border-[7px] border-[#aab1bc] bg-[#111014] shadow-[0_0_50px_rgba(0,0,0,0.5)]">

        {/* Content */}
        <div className="flex flex-1 flex-col lg:flex-row">

          {/* ================= LEFT SIDE ================= */}
          <section className="relative min-h-[560px] overflow-hidden lg:w-[42%]">

            {/* Abstract background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,#193d68_0%,#101d35_30%,#080e1d_70%,#111014_100%)]" />

            {/* Background glow */}
            <div className="absolute left-[-20%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-[-20%] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

            {/* Fake neural network lines */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-[10%] top-[10%] h-[350px] w-px rotate-[30deg] bg-blue-300" />
              <div className="absolute left-[20%] top-[5%] h-[400px] w-px rotate-[55deg] bg-blue-400" />
              <div className="absolute left-[35%] top-[15%] h-[350px] w-px rotate-[25deg] bg-purple-300" />
              <div className="absolute left-[50%] top-[5%] h-[400px] w-px rotate-[65deg] bg-blue-300" />
              <div className="absolute left-[65%] top-[10%] h-[350px] w-px rotate-[45deg] bg-purple-300" />
            </div>

            {/* Left content */}
            <div className="relative z-10 flex h-full min-h-[560px] flex-col p-5 sm:p-8">

              {/* Logo */}
              <div className="text-sm font-bold tracking-tight sm:text-base">
                team-sync
              </div>

              {/* Marketing content */}
              <div className="mt-auto max-w-[420px] pb-6">

                <div className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-[#c8b1ff]">
                  <span className="text-sm">✦</span>
                  NEXT-GEN INTELLIGENCE
                </div>

                <h1 className="max-w-[400px] text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl">
                  Accelerate your team's intelligence.
                </h1>

                <p className="mt-5 max-w-[390px] text-sm leading-5 text-gray-300">
                  Connect your enterprise data to our specialized AI
                  models and unlock unparalleled strategic insights
                  in seconds.
                </p>

                {/* Stats */}
                <div className="mt-8 flex gap-8">
                  <div>
                    <p className="text-lg font-bold text-gray-300">
                      99.9%
                    </p>
                    <p className="text-[9px] text-gray-500">
                      Uptime SLA
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-gray-300">
                      ISO
                    </p>
                    <p className="text-[9px] text-gray-500">
                      27001 Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* ================= RIGHT SIDE ================= */}
          <section className="flex flex-1 items-center justify-center bg-[#121116] px-6 py-12 sm:px-12 lg:px-16">

            <div className="w-full max-w-[420px]">

              {/* Heading */}
              <div className="mb-7">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Create your account
                </h2>

                <p className="mt-2 text-[11px] text-gray-300">
                  Experience the future of collaborative data intelligence.
                </p>
              </div>


              {/* FORM */}
              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="space-y-4"
              >

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-[10px] font-semibold">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`h-[39px] w-full rounded-md border bg-[#1c1b20] pl-10 pr-3 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-[#9c78e9] ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-[#302e35]"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.fullName && (
                    <p className="mt-1 text-[9px] text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>


                {/* Email */}
                <div>
                  <label className="mb-2 block text-[10px] font-semibold">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="email"
                      placeholder="name@company.com"
                      className={`h-[39px] w-full rounded-md border bg-[#1c1b20] pl-10 pr-3 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-[#9c78e9] ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#302e35]"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-[9px] text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>


                {/* Password */}
                <div>
                  <label className="mb-2 block text-[10px] font-semibold">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`h-[39px] w-full rounded-md border bg-[#1c1b20] pl-10 pr-3 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-[#9c78e9] ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#302e35]"
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                  </div>

                  {/* Strength bars */}
                  <div className="mt-1.5 flex gap-1">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className={`h-[3px] flex-1 rounded-full transition ${
                          strength >= item
                            ? "bg-[#b68cff]"
                            : "bg-[#29272d]"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[9px] text-[#b68cff]">
                    {!password
                      ? "Strong password"
                      : strength <= 1
                      ? "Weak password"
                      : strength <= 2
                      ? "Medium password"
                      : "Strong password"}
                  </p>

                  {errors.password && (
                    <p className="text-[9px] text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>


                {/* Terms */}
                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      {...register("terms", {
                        required: "You must accept the terms",
                      })}
                    />

                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border border-[#36333c] bg-[#1c1b20] peer-checked:bg-[#9a75e8]">
                      <Check
                        size={10}
                        className="hidden text-black peer-checked:block"
                      />
                    </span>

                    <span className="text-[9px] leading-4 text-gray-300">
                      I agree to the Terms of Service and Privacy Policy.
                    </span>
                  </label>

                  {errors.terms && (
                    <p className="mt-1 text-[9px] text-red-400">
                      {errors.terms.message}
                    </p>
                  )}
                </div>


                {/* Create account */}
                <button
                  type="submit"
                  className="mt-2 flex h-[37px] w-full items-center justify-center rounded-md bg-gradient-to-r from-[#7957bb] to-[#c3a6ff] text-xs font-semibold text-[#110d18] transition hover:brightness-110 active:scale-[0.99]"
                >
                  Create Account
                </button>


                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-[#29272d]" />

                  <span className="text-[8px] tracking-wider text-gray-600">
                    OR CONTINUE WITH
                  </span>

                  <div className="h-px flex-1 bg-[#29272d]" />
                </div>


                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-2.5">

                  <button
                    type="button"
                    className="flex h-[39px] items-center justify-center gap-2 rounded-md border border-[#302e35] bg-[#151419] text-[11px] font-medium transition hover:bg-[#1d1b21]"
                  >
                    <span className="text-sm">◉</span>
                    Google
                  </button>

                  <button
                    type="button"
                    className="flex h-[39px] items-center justify-center gap-2 rounded-md border border-[#302e35] bg-[#151419] text-[11px] font-medium transition hover:bg-[#1d1b21]"
                  >
                    <span className="text-sm">✣</span>
                    SSO
                  </button>

                </div>


                {/* Login */}
                <p className="pt-5 text-center text-[11px] text-gray-300">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="font-semibold text-[#c3a6ff] hover:underline"
                  >
                    Log In
                  </button>
                </p>

              </form>
            </div>
          </section>
        </div>


        {/* ================= FOOTER ================= */}
        <footer className="flex min-h-[58px] flex-col justify-center gap-3 border-t border-[#27252b] bg-[#111014] px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <div className="text-sm font-bold">
            team-sync
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[8px] text-gray-300">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
            <button>Security</button>
            <button>System Status</button>
          </div>

          <p className="text-[8px] text-gray-300">
            © 2024 team-sync. Enterprise Intelligence Platforms.
          </p>

        </footer>

      </div>
    </main>
  );
}

export default Register;