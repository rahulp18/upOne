import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { FiArrowLeft } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { times } from "../utils/data";
const ChooseStaf = () => {
  // console.log(times);
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  return (
    <div className="h-screen w-full  relative py-4">
      <div className="">
        <div className=" mx-4  flex gap-3 items-center justify-start">
          <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
            <FiArrowLeft
              className="text-xl font-bold"
              onClick={() => navigate(`/booksaloon`)}
            />
          </div>
          <h1
            className="text-lg font-semibold font-poppins text-black cursor-pointer"
            onClick={() => navigate(`/booksaloon`)}
          >
            Back
          </h1>
        </div>
        <div className="flex items-center mt-4 px-4 justify-between">
          <h1 className="text-sm font-bold text-gray-700">Appoitment</h1>
          <h1 className="text-sm font-normal font-roboto text-gray-400">
            Step 02/04
          </h1>
        </div>
        <div className="px-4 mt-5 flex gap-3 items-start flex-col">
          <h1 className="text-xl font-roboto text-black">Choose Staf</h1>
          <div className="flex gap-6 mt-3 uppercase flex-col">
            <div className="flex items-center justify-center relative ml-5 ">
              <img
                src="https://www.showstoppersalon.com/wp-content/uploads/2021/03/hair-stylehair-styles-for-boys-hair-styles-men-salon-near-me-hair-boy-hair-salon-near-me-salon-in-mira-road-salons-hair-styles-for-wedding-near-me-9.jpg"
                alt="staf"
                className="h-12 w-12 rounded-full object-cover absolute -left-4"
              />
              <div className="text-white bg-sky-500 border-[1px] px-3 py-1 rounded-lg  border-gray-400 w-full shadow-sm">
                <h1 className="text-md font-poppins font-semibold ml-7">
                  Raju Rastoge
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center relative ml-5 ">
              <img
                src="https://www.showstoppersalon.com/wp-content/uploads/2021/03/hair-stylehair-styles-for-boys-hair-styles-men-salon-near-me-hair-boy-hair-salon-near-me-salon-in-mira-road-salons-hair-styles-for-wedding-near-me-9.jpg"
                alt="staf"
                className="h-12 w-12 rounded-full object-cover absolute -left-4"
              />
              <div className="text-black bg-gray-50 border-[1px] px-3 py-1 rounded-lg  border-gray-400 w-full shadow-sm">
                <h1 className="text-md font-poppins font-semibold ml-7">
                  Faran Chacha
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between w-full">
            <h2 className="text-md font-semibold text-gray-600">Choose Date</h2>
            <DatePicker onChange={onChange} value={value} />
          </div>
          <div className="mt-5">
            <h2 className="text-md font-semibold text-gray-600">
              Select From Available slot
            </h2>
            <div className="flex flex-wrap gap-3 mt-5">
              {times.map((item, index) => (
                <div
                  className="px-2 flex flex-col items-center justify-center h-auto rounded-xl shadow-sm border-[1px] border-gray-400"
                  key={index}
                >
                  <h1 className="text-md text-gray-600 font-semibold font-poppins">
                    {item.time}
                  </h1>
                  <h1 className="text-sm text-gray-400 font-semibold font-poppins">
                    {item.seat} Seat
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 absolute bottom-0 w-full  text-white bg-[#10143d] rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-lg font-poppins font-semibold ">2 Services</h1>
            <p className="text-sm text-white ">₹400</p>
          </div>
          <button
            onClick={() => navigate("/summery")}
            className="btn w-auto max-w-xs capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Next <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseStaf;
