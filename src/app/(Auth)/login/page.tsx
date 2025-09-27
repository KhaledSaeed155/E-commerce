"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string|null>(null);
  const router = useRouter();
const searchParams =useSearchParams() ;
  interface Inputs {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(values: Inputs) {
try {
  const callBackUrl=searchParams.get("callbackUrl") ?? "/";
  
      const response = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callBackUrl
    });
    if (response?.ok) {
      window.location.assign(response?.url ?? callBackUrl) ;
      toast.success("logged in successfully") ;
      setErrorMsg(null) ;
    return
      // router.push("/");
    } 
  
} catch (error) {
  console.log(error);
  setErrorMsg("userName or Pass Incorrect")
  
}
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
          Welcome Back
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-center mb-4 font-medium animate-pulse">
            {errorMsg}
          </p>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition-all hover:shadow-md bg-white/90"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-600 shadow-lg transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm ">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            Register
          </a>
               <a
            href="/forgotpassword"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline ms-2"
          >
           forgot password
          </a>
        </p>
      </div>
    </div>
  );
}
