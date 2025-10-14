import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Login from "../components/Login"; // 👈 Add this import

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Login /> {/* 👈 Add this line right below Navbar */}

      <main className="flex-grow">
        <Banner />
        <Freebook />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
