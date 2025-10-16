import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");

        // ✅ Save user info
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // ✅ Close modal
        document.getElementById("my_modal_3").close();

        // ✅ Reload slightly after closing
        setTimeout(() => window.location.reload(), 800);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      {/* ✅ Wrapper to center modal properly */}
      <div className="modal-box bg-white dark:bg-gray-900 dark:text-white relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close (X) button */}
          <button
            type="button"
            onClick={() =>
              document.getElementById("my_modal_3").close()
            }
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="font-bold text-lg text-center mb-4">Login</h3>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200"
            >
              Login
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* ✅ Optional: click outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Login;
