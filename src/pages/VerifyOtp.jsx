import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white px-6 py-5">
      <div className="flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/login")}
          />
        </div>
        <h1
          className="text-md font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login/Signup
        </h1>
      </div>
      <div className="mt-[8rem]">
        <h1 className="text-[26px] text-center font-poppins font-bold text-gray-700">
          Enter Verification Code
        </h1>
        <p className="mb-12 mt-4 font-normal  text-center text-lg font-roboto text-gray-500">
          we have sent you a 4 digit verification code
        </p>
        <div className="mt-5 flex gap-2 items-center justify-center">
          <input
            type="number"
            className="p-3 text-xl h-14 w-14 text-black placeholder-slate-400 bg-gray-100 text-center rounded-xl border-2 border-gray-600"
            placeholder="1"
          />
          <input
            type="number"
            className="p-3 text-xl h-14 w-14 text-black placeholder-slate-400 bg-gray-100 text-center rounded-xl border-2 border-gray-600"
            placeholder="2"
          />
          <input
            type="number"
            className="p-3 text-xl h-14 w-14 text-black placeholder-slate-400 bg-gray-100 text-center rounded-xl border-2 border-gray-600"
            placeholder="5"
          />
          <input
            type="number"
            className="p-3 text-xl h-14 w-14 text-black placeholder-slate-400 bg-gray-100 text-center rounded-xl border-2 border-gray-600"
            placeholder="9"
          />
        </div>
        <button
          onClick={() => navigate("/location")}
          className="btn mt-12 w-full max-w-sm text-lg bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
