import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* ✅ makes footer stick to bottom */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
