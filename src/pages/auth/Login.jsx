import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8082/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      // console.log("Login response:", result);

      if (!response.ok) {
        setError(result.message || "Login failed");
        return;
      }

      localStorage.setItem("token", result.token);
      navigate("/dashboard");

      // console.log("Token:", result.token);
      // console.log("Saved token:", localStorage.getItem("token"));
    } catch (error) {
      // console.error("Login error:", error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <h1 className="mb-6 text-4xl font-extrabold">ShortLink</h1>

      <div className="w-full flex flex-col gap-3 max-w-md rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Welcome Back</h2>

        <p className="mt-1 text-sm text-gray-500">
          Please enter your details to sign in.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-gray-600 text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <div className="mb-1 flex text-gray-600 items-center justify-between">
              <label className="text-sm font-medium">Password</label>

              <Link
                to="/forgot-password"
                className="text-sm font-bold text-blue-600"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border px-3 py-2 pr-10 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={
                  showPassword
                    ? "Sembunyikan kata sandi"
                    : "Tampilkan kata sandi"
                }
              >
                {showPassword ? (
                  <LuEyeClosed className="h-5 w-5" />
                ) : (
                  <LuEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-3 rounded-md bg-blue-600 py-2 text-white font-bold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In "}
            <FaArrowRight />
          </button>
        </form>
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-400">OR CONTINUE WITH</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <button
          type="button"
          className="w-full rounded-md border py-2 text-sm transition hover:bg-gray-50"
        >
          Sign in with Google
        </button>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Don't have an account ?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </main>
  );
}

export default Login;
