import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcShop } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full  relative py-4">
      <div className=" mx-4  flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate(`/summery`)}
          />
        </div>
        <h1
          className="text-lg font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate(`/summery`)}
        >
          Select Payment method
        </h1>
      </div>
      <div className="flex items-center mt-4 px-4 justify-between">
        <h1 className="text-sm font-bold text-gray-700">Payments</h1>
        <h1 className="text-sm font-normal font-roboto text-gray-400">
          Step 04/04
        </h1>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <h1 className="text-md font-bold text-gray-700 flex items-center gap-2 ">
          Amount to pay <span className="text-lg text-black">₹450</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col mt-5 px-4 gap-3">
        <div
          onClick={() => navigate("/success")}
          className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center "
        >
          <div className="flex gap-1 items-center">
            <FcShop className="text-sky-600 text-4xl" />
            <h1 className="text-lg font-bold text-gray-900">Pay At Store</h1>
          </div>
        </div>
        <h1 className="text-gray-400">Online Payment feature will add later</h1>
      </div>
    </div>
  );
};

export default Payment;
