import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast"; // only if you already use toast elsewhere

function Logout() {
  const { authUser, setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      // ✅ Added reload delay
      setTimeout(() => window.location.reload(), 800);

    } catch (error) {
      toast.error("Error: " + error.message);
    } 
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
