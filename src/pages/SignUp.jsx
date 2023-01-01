import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { MobileNumberInput } from "../components";
const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verifyOtp");
  };
  return (
    <div className="h-screen px-4 py-2">
      <div className="flex items-center justify-center">
        <h1 className="flex text-[26px] font-poppins text-center items-center justify-start font-semibold text-sky-500">
          Up
          <img src={logo} alt="logo" className="h-12 w-12 object-cover" />{" "}
          <span className="text-sky-700  font-poppins font-bold">One</span>
        </h1>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-lg font-semibold text-gray-700">Let's SignUp !</h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Enter name"
            className="input input-bordered text-black  w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="input input-bordered text-black  w-full max-w-xs"
          />
          <MobileNumberInput />
          <button className="btn btn-outline  w-full text-[16px] py-2 max-w-sm  mt-6">
            Sign up
          </button>
        </form>
        <h1 className="text-sm font-roboto text-gray-400">
          Already have an account !{" "}
          <span
            className="text-sky-600 font-semibold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
