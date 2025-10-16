import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Contact Form Submitted:", data);

  return (
    <dialog id="contact_modal" className="modal">
      <div className="modal-box relative">
        {/* ✕ Close button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-lg mb-4 text-center">Contact Us</h3>

        {/* Name Field */}
        <div className="mt-2 space-y-2">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-primary/40"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        {/* Email Field */}
        <div className="mt-4 space-y-2">
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

        {/* Message Field */}
        <div className="mt-4 space-y-2">
          <label className="block text-sm font-medium">Message</label>
          <textarea
            placeholder="Write your message"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-primary/40"
            rows="3"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 w-full"
          >
            Send Message
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Contact;
