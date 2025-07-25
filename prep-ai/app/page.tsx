// app/login/page.tsx
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log("Logging in with:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-yellow-100 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-10">
        <div className="text-center mb-8">
          {/* <img src="/logo.png" alt="Deeps BeerCafe" className="mx-auto h-20" /> */}
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Prep AI</h1>
          <h1 className="text-xl font-bold text-gray-800 mt-2">Sign In</h1>
          <p className="text-sm text-gray-500">
            Welcome back! Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={form.username}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <div className="text-right text-sm text-yellow-600 mt-1 hover:underline cursor-pointer">
              Forgot Password?
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-500">or</div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-xl hover:bg-gray-100"
            >
              <img src="/google-icon.svg" alt="Google" className="h-5 w-5" />
              Continue with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-xl hover:bg-gray-100"
            >
              <img
                src="/facebook-icon.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
              Continue with Facebook
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-yellow-600 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
