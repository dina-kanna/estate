
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") || "").trim();
    const name =
      String(formData.get("name") || "").trim() ||
      email.split("@")[0];

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Demo authentication only.
    // A real application needs a secure backend.
    const user = {
      name,
      email,
    };

    try {
      localStorage.setItem(
        "estatehaven_user",
        JSON.stringify(user)
      );

      navigate("/profile");
    } catch (storageError) {
      console.error("Unable to save user:", storageError);
      setError("Unable to save your account. Please try again.");
    }
  }

  function changeMode(newMode) {
    setMode(newMode);
    setError("");
    setShowPassword(false);
  }

  return (
    <main className="grid min-h-screen bg-[#f6f5f0] lg:grid-cols-2">

      {/* LEFT IMAGE SECTION */}
      <section
        className="relative hidden min-h-[700px] bg-cover bg-center lg:flex lg:items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#102a25] via-[#102a25]/30 to-transparent" />

        <div className="relative z-10 p-16 text-white">

          <p className="font-bold tracking-[4px] text-[#c5a36a]">
            ESTATE HAVEN
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight">
            Welcome
            <span className="block text-[#c5a36a]">
              Home
            </span>
          </h1>

          <p className="mt-5 max-w-md leading-8 text-white/70">
            Discover beautiful properties and find the
            perfect place for your future.
          </p>

        </div>
      </section>

      {/* RIGHT LOGIN SECTION */}
      <section className="flex items-center justify-center px-5 py-16">

        <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-xl md:p-10">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 text-[#102a25]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102a25] text-2xl text-white">
              ⌂
            </div>

            <span className="text-2xl font-extrabold">
              Estate <span className="text-[#c5a36a]">Haven</span>
            </span>
          </Link>

          {/* HEADING */}
          <h1 className="mt-9 text-3xl font-extrabold text-[#102a25]">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            {mode === "login"
              ? "Login to continue to your account."
              : "Create your account to get started."}
          </p>

          {/* LOGIN / SIGNUP TABS */}
          <div className="mt-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1">

            <button
              type="button"
              onClick={() => changeMode("login")}
              className={`rounded-lg py-3 font-bold transition ${
                mode === "login"
                  ? "bg-white text-[#102a25] shadow"
                  : "text-gray-500 hover:text-[#102a25]"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => changeMode("signup")}
              className={`rounded-lg py-3 font-bold transition ${
                mode === "signup"
                  ? "bg-white text-[#102a25] shadow"
                  : "text-gray-500 hover:text-[#102a25]"
              }`}
            >
              Sign Up
            </button>

          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >

            {/* NAME */}
            {mode === "signup" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#c5a36a] focus:ring-2 focus:ring-[#c5a36a]/20"
                />
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#c5a36a] focus:ring-2 focus:ring-[#c5a36a]/20"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  autoComplete={
                    mode === "login"
                      ? "current-password"
                      : "new-password"
                  }
                  minLength={6}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 pr-16 outline-none transition focus:border-[#c5a36a] focus:ring-2 focus:ring-[#c5a36a]/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#c5a36a]"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#102a25] py-4 font-bold text-white transition duration-300 hover:bg-[#c5a36a]"
            >
              {mode === "login" ? "Login to Account" : "Create Account"}
            </button>

          </form>

          {/* DEMO NOTICE */}
          <div className="mt-6 rounded-xl bg-amber-50 p-4 text-xs leading-6 text-amber-800">
            Demo authentication only. This form does not verify
            passwords or create secure accounts. Connect a backend
            authentication service before production use.
          </div>

          {/* BROWSE */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Want to explore properties?

            <Link
              to="/properties"
              className="ml-2 font-bold text-[#c5a36a] hover:underline"
            >
              Browse Now
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}
