import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  console.log(list);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Course data={list} />
      </main>
      <Footer />
    </div>
  );
}

export default Courses;
