import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={`bg-white h-screen `}>
      <h1 className="text-red-600">This page is under contruction</h1>
      <div className="flex items-center justify-center h-full">
        <button
          onClick={() => navigate("/login")}
          className="btn  max-w-sm text-lg bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
