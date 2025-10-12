import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* ✕ Close button */}
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>

        <h3 className="font-bold text-lg mb-4 text-center">Login</h3>

        {/* Email field */}
        <div className="mt-2 space-y-2">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-primary/40"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        {/* Password field */}
        <div className="mt-4 space-y-2">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-primary/40"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-5">
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 w-full"
          >
            Login
          </button>

          <p>
            Not registered?{" "}
            <Link to="/signup" className="underline text-blue-500 cursor-pointer">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default Login;
