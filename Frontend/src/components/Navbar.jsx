import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Contact from "../components/Contact";
import Logout from "../components/Logout";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Navbar() {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
  const { authUser } = useAuth(); // ✅ access current user
  const navigate = useNavigate(); // ✅ moved inside component

  // ✅ Moved inside Navbar
  const handleCourseClick = (e) => {
    e.preventDefault();
    if (!authUser) {
      toast.error("Please signup or login to view courses");
      navigate("/signup");
    } else {
      navigate("/course");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
    } else if (saved === "light") {
      setIsDark(false);
    } else {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      console.error(`Modal with id '${id}' not found.`);
    }
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-base-100 dark:bg-gray-900 dark:text-white sticky top-0 z-50 transition">
      <h1 className="text-3xl font-bold text-primary cursor-pointer">BookVerse</h1>

      <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
        </li>
        <li>
          {/* ✅ Replaced direct Link click with handler */}
          <Link
            to="/course"
            onClick={handleCourseClick}
            className="hover:text-primary transition"
          >
            Course
          </Link>
        </li>
        <li
          onClick={() => openModal("contact_modal")}
          className="hover:text-primary transition cursor-pointer"
        >
          Contact
        </li>
        <li className="hover:text-primary transition">About</li>
      </ul>

      <div className="flex items-center gap-4">
        <label className="px-3 py-2 border rounded-md flex items-center gap-2 bg-transparent dark:border-gray-600">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="border-none outline-none bg-transparent focus:ring-0 text-sm dark:text-white"
          />
        </label>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gray-600 hover:bg-black transition text-white"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4a1 1 0 0 1 1-1V2a1 1 0 1 0-2 0V3a1 1 0 0 1 1 1zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 0-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1-1-1H2a1 1 0 1 0 0 2h1a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1-1h1a1 1 0 1 0 0 2h-1a1 1 0 0 1-1-1zm-8-6a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1-9.47-9.47 1 1 0 0 0-.14-1.05A10 10 0 1 0 21.64 13z" />
            </svg>
          )}
        </button>

        {/* ✅ Conditionally render Logout or Login */}
        {authUser ? (
          <Logout />
        ) : (
          <button
            className="bg-gray-600 text-white px-6 py-2 font-semibold hover:bg-black transition rounded-none"
            onClick={() => openModal("my_modal_3")}
          >
            Login
          </button>
        )}
      </div>

      <Login />
      <Contact />
    </div>
  );
}

export default Navbar;
