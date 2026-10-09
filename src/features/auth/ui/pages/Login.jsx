import { useState } from "react";
import {
  Cloud,
  GitBranch,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { useAuth } from "../hooks/Useauth.jsx";

const Login = ({ embedded = false }) => {
  const { register, handleSubmit, errors, authError, onLoginSubmit, navigate } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={`${embedded ? "auth-panel auth-panel--login h-full px-2 py-3 sm:px-4" : "login-page min-h-dvh overflow-hidden px-4 py-8 sm:px-8"} relative isolate flex items-center justify-center bg-[#100e13] text-white`}>
      <div className="pointer-events-none absolute -left-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#7550b9]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-56 -right-40 h-[36rem] w-[36rem] rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className={`${embedded ? "auth-content w-full" : "w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#17151c]/95 shadow-[0_2rem_7rem_rgba(0,0,0,0.55)] lg:min-h-[42rem] lg:grid-cols-[1fr_0.9fr]"} relative grid`}>
        <section className={`${embedded ? "hidden" : "relative hidden flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_20%_10%,rgba(117,80,185,0.28),transparent_52%),linear-gradient(145deg,#201a2b_0%,#14121a_58%,#111015_100%)] p-12 lg:flex xl:p-16"}`}>
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full border border-purple-200/10" />
          <div className="pointer-events-none absolute -bottom-16 -right-12 h-72 w-72 rounded-full border border-purple-200/10" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7550b9] shadow-[0_8px_30px_rgba(117,80,185,0.35)]">
                <span className="text-xl font-bold">✣</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Team-sync</span>
            </div>
          </div>

          <div className="relative max-w-lg">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/15 bg-purple-200/[0.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#d2b8ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b794f4]" />
              YOUR TEAM, IN SYNC
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
              Great work starts with a connected team.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#b8b1c2]">
              Bring your people, projects, and everyday work together in one calm, focused workspace.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1a1720] bg-[#7151b4] text-xs font-semibold">A</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1a1720] bg-[#466a83] text-xs font-semibold">R</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1a1720] bg-[#9b685e] text-xs font-semibold">M</span>
              </div>
              <p className="text-sm text-[#c4bdcf]">One workspace. Better teamwork.</p>
            </div>
          </div>

          <p className="relative text-xs text-[#817a8b]">A more thoughtful way to work together.</p>
        </section>

        <section className={`${embedded ? "px-3 py-4 sm:px-5" : "px-6 py-10 sm:px-12 lg:px-14 xl:px-20"} flex items-center justify-center`}>
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7550b9] shadow-[0_8px_30px_rgba(117,80,185,0.3)]">
                  <span className="text-xl font-bold">✣</span>
                </div>
                <span className="text-lg font-bold tracking-tight">Team-sync</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-[#c5a5ff]">Welcome back</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sign in to your workspace</h2>
              <p className="mt-3 text-sm leading-6 text-[#a9a3b0]">
                Enter your details to pick up where your team left off.
              </p>
            </div>

            <div className={`${embedded ? "auth-social-options" : ""} mb-6 grid grid-cols-2 gap-3`}>
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Cloud size={16} strokeWidth={1.8} />
                Google
              </button>
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <GitBranch size={16} strokeWidth={1.8} />
                GitHub
              </button>
            </div>

            <div className={`${embedded ? "auth-social-divider" : ""} mb-6 flex items-center gap-4`}>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-[#817a8b]">or continue with email</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
              {authError && (
                <p role="alert" className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2.5 text-sm text-red-300">
                  {authError}
                </p>
              )}

              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-[#e4dfeb]">
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-[#100e13] px-4 text-sm text-white outline-none transition placeholder:text-[#686271] focus:ring-4 focus:ring-[#7651b9]/15 ${
                    errors.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-white/10 focus:border-[#9b78d2]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="login-password" className="text-sm font-medium text-[#e4dfeb]">
                    Password
                  </label>
                  <button type="button" className="text-xs font-medium text-[#c5a5ff] transition hover:text-white hover:underline">
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className={`h-12 w-full rounded-xl border bg-[#100e13] px-4 pr-12 text-sm text-white outline-none transition placeholder:text-[#686271] focus:ring-4 focus:ring-[#7651b9]/15 ${
                      errors.password
                        ? "border-red-500 focus:border-red-400"
                        : "border-white/10 focus:border-[#9b78d2]"
                    }`}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#8a8394] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b794f4]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#c4bdcf]">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="h-4 w-4 rounded accent-[#8b68c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b794f4]"
                />
                Stay signed in
              </label>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#7651b9] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(113,81,180,0.24)] transition hover:bg-[#8764c8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a5ff] active:scale-[0.99]"
              >
                Sign in
                <LogIn size={17} />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#a9a3b0]">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="font-semibold text-[#c5a5ff] transition hover:text-white hover:underline"
              >
                Sign up
              </button>
            </p>

            <div className={`${embedded ? "auth-footer" : ""} mt-8 border-t border-white/10 pt-5 text-center`}>
              <p className="text-xs text-[#746e7c]">© 2024 Team-sync. Enterprise Intelligence Platforms.</p>
              <div className="mt-3 flex justify-center gap-5">
                <button type="button" className="text-xs text-[#746e7c] transition hover:text-gray-300">Privacy Policy</button>
                <button type="button" className="text-xs text-[#746e7c] transition hover:text-gray-300">Terms of Service</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;