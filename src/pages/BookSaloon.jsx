import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BookSaloon = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className=" mx-4 my-5 flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate(`/salon/${2}`)}
          />
        </div>
        <h1
          className="text-lg font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate(`/salon/${2}`)}
        >
          Book Appoitment
        </h1>
      </div>
      <div className="h-full mt-5">
        <div className="flex items-center px-4 justify-between ">
          <h1 className="text-sm font-bold text-gray-700">Choose Services</h1>
          <h1 className="text-sm font-normal font-roboto text-gray-400">
            Step 01/03
          </h1>
        </div>
        <div className="text-xl  font-bold mt-9 font-roboto px-4">
          Red Chair Saloon
        </div>
        <div className="mt-5 h-auto px-4 py-2 w-full bg-sky-50 rounded-t-2xl">
          <div className="flex justify-around items-center py-4 ">
            <button className="btn btn-sm bg-[#10143d] capitalize ">
              About
            </button>
            <button className="btn btn-sm border-none text-gray-600 bg-transparent hover:bg-[#10143d] hover:text-white transition-all duration-75 ">
              Services
            </button>
            <button className="btn btn-sm border-none text-gray-600 bg-transparent hover:bg-[#10143d] hover:text-white transition-all duration-75 ">
              Review
            </button>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <h1 className="text-md font-semibold text-black font-poppins">
              Choose your Service
            </h1>
            <select className="select select-sm  max-w-xs">
              <option disabled selected>
                Select here ?
              </option>
              <option>Facial</option>
              <option>Massage</option>
              <option>Bleach</option>
            </select>
          </div>
          <div className="flex gap-2 flex-col justify-center mt-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="p-3 py-4 flex justify-between items-center bg-white rounded-xl shadow-sm"
              >
                <div className="flex gap-2 items-center ">
                  <input type="checkbox" className="checkbox bg-gray-100" />
                  <div className="flex flex-col ">
                    <h1 className="text-lg font-poppins font-semibold ">
                      Haicut
                    </h1>
                    <p className="text-sm text-gray-600 ">40min</p>
                  </div>
                </div>
                <h1 className="text-lg font-poppins font-semibold">₹400</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3  text-white bg-[#10143d] rounded-t-xl">
          <div className="flex justify-between items-center">
            <div className="flex flex-col ">
              <h1 className="text-lg font-poppins font-semibold ">
                2 Services
              </h1>
              <p className="text-sm text-white ">₹400</p>
            </div>
            <button
              onClick={() => navigate("/slot")}
              className="btn w-auto max-w-xs capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
            >
              Continue <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSaloon;
