import React, { useState, useEffect } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

function useAuth() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  return [authUser, setAuthUser];
}

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* PUBLIC: allow any user to visit Courses */}
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
