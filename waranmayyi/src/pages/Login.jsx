import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, UserCog, Eye, EyeOff, Leaf } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const inputBase =
  "w-full bg-[#020617] border border-[#334155] text-white placeholder-slate-500 rounded-xl px-4 py-3 pl-11 text-sm outline-none transition-all duration-300 focus:border-[#22c55e]";

const glowStyle = {
  boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.25)",
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Invalid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Minimum 6 characters.";
    if (!form.role) errs.role = "Please select a role.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    
    // Login user with role
    login({
      email: form.email,
      name: form.email.split('@')[0],
      role: form.role
    });

    // Navigate to appropriate dashboard
    navigate(`/dashboard/${form.role}`);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const getInputStyle = (field) => ({
    ...(focusedField === field ? glowStyle : {}),
    ...(errors[field] ? { borderColor: "#ef4444" } : {}),
  });

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-8 md:py-15"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #064e3b 55%, #065f46 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-[-10%] left-[-8%] w-105 h-105 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #22c55e 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-12%] right-[-8%] w-95 h-95 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #84cc16 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute top-[40%] right-[15%] w-50 h-50 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #34d399 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md mx-4"
        style={{
          background: "rgba(16, 185, 129, 0.08)",
          border: "1px solid rgba(52, 211, 153, 0.3)",
          borderRadius: "24px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow:
            "0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(52,211,153,0.1) inset, 0 1px 0 rgba(52,211,153,0.2) inset",
        }}
      >
        {/* Inner glow top strip */}
        <div
          className="absolute top-0 left-[20%] right-[20%] h-px rounded-full "
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(52,211,153,0.6), transparent)",
          }}
        />

        <div className="p-6 sm:p-7">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center mb-5">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3"
              style={{
                background: "linear-gradient(135deg, #22c55e, #84cc16)",
                boxShadow: "0 8px 24px rgba(34,197,94,0.4)",
              }}
            >
              <Leaf size={22} className="text-white" strokeWidth={2.2} />
            </div>
            <h1
              className="text-2xl font-bold text-white tracking-tight mb-1"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Welcome Back
            </h1>
            <p className="text-slate-400 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Role */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-1.5">
                Role
              </label>
              <div className="relative">
                <UserCog
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                  style={{
                    color: focusedField === "role" ? "#22c55e" : "#475569",
                  }}
                />
                <select
                  value={form.role}
                  onChange={handleChange("role")}
                  onFocus={() => setFocusedField("role")}
                  onBlur={() => setFocusedField(null)}
                  className={inputBase + " appearance-none cursor-pointer"}
                  style={{
                    ...getInputStyle("role"),
                    color: form.role ? "#fff" : "#64748b",
                  }}
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option
                    value="advisor"
                    style={{ background: "#020617", color: "#fff" }}
                  >
                    Advisor
                  </option>
                  <option
                    value="domanager"
                    style={{ background: "#020617", color: "#fff" }}
                  >
                    DO Manager
                  </option>
                  <option
                    value="areamanager"
                    style={{ background: "#020617", color: "#fff" }}
                  >
                    Area Manager
                  </option>
                  <option
                    value="zonalmanager"
                    style={{ background: "#020617", color: "#fff" }}
                  >
                    Zonal Manager
                  </option>
                  <option
                    value="statehead"
                    style={{ background: "#020617", color: "#fff" }}
                  >
                    State Head
                  </option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {errors.role && (
                <p className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                  {errors.role}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    color: focusedField === "email" ? "#22c55e" : "#475569",
                  }}
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={inputBase}
                  style={getInputStyle("email")}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    color: focusedField === "password" ? "#22c55e" : "#475569",
                  }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange("password")}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className={inputBase + " pr-11"}
                  style={getInputStyle("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-emerald-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot password */}
            <div className="flex justify-end -mt-1">
              <button
                type="button"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200 relative overflow-hidden hover:scale-105"
                style={{
                  background: "linear-gradient(to right, #84cc16, #22c55e)",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.08em",
                }}
              >
                <span className="relative z-10">LOGIN</span>
                {/* Shine effect */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                  }}
                />
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-xs text-slate-600 font-medium">OR</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Register link */}
          <p className="text-center text-sm text-slate-400">
            New user?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-emerald-400 font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
