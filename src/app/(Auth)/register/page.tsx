"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  interface Inputs {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const passwordValue = watch("password"); // watch password field

  async function onSubmit(values: Inputs) {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      setErrorMsg("");
      if (response.data.message === "success") {
        router.push("/login");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.response?.data.message || "Something went wrong");
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
          Create Account
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-center mb-4 font-medium animate-pulse">
            {errorMsg}
          </p>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md w-full bg-white/90"
              {...register("password", { required: "Password is required", minLength: 6 })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Re-enter Password"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("rePassword", {
              required: "Please re-enter password",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
          />
          {errors.rePassword && (
            <p className="text-red-500 text-sm">{errors.rePassword.message}</p>
          )}

          <input
            type="tel"
            placeholder="Phone"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-600 shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
