import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo) // ✅ correct endpoint
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

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
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
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
              {...register("email", { required: true })} // ✅ correct key name
            />
            {errors.email && ( // ✅ correct error key
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
