import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box relative">
        {/* ✕ Close button */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>

          {/* Name field */}
          <div className="mt-2 space-y-2">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("Name", { required: true })}
            />
            {errors.Name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email field */}
          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("Email", { required: true })}
            />
            {errors.Email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password field */}
          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-3 mt-5">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 w-full"
            >
              Signup
            </button>

            <p>
              Have an account?{" "}
              <Link
                to="/login"
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
