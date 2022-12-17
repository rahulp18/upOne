import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative bg-white">
      {/* Header */}
      <div className="shadow-lg  py-6 px-4 flex justify-between items-center">
        <h1 className="text-lg font-poppins font-semibold text-gray-700">
          Filters
        </h1>
        <h1 className="text-md font-poppins font-semibold uppercase text-sky-500">
          Clear all
        </h1>
      </div>
      {/* .options  */}
      <div className="flex h-full mt-4">
        <div className="flex-1 bg-sky-50 h-full">
          <div className="flex flex-col">
            <h1
              className={`text-md hover:bg-white transition-all duration-75 text-gray-700 font-poppins px-2 py-4 border-b-[1px] border-gray-400 `}
            >
              Price Range
            </h1>
            <h1
              className={`text-md hover:bg-white transition-all duration-75 text-gray-700 font-poppins px-2 py-4 border-b-[1px] border-gray-400 `}
            >
              Rating
            </h1>
            <h1
              className={`text-md hover:bg-white transition-all duration-75 text-gray-700 font-poppins px-2 py-4 border-b-[1px] border-gray-400 `}
            >
              Distance
            </h1>
          </div>
        </div>
        <div className="flex-1 bg-white h-full px-4 py-3">
          <h1 className="text-sm font-roboto text-gray-700">
            Select Price range
          </h1>
          <input
            type="range"
            min="0"
            max="100"
            // value="25"
            className="range range-xs"
            step="25"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>50</span>
            <span>100</span>
            <span>300</span>
            <span>500</span>
            <span>3000</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="sticky bottom-0 w-full shadow-lg border-t-2 border-gray-400 bg-white px-3 py-4">
        <div className="flex">
          <div className="flex-1 text-md font-semibold text-gray-600 font-poppins border-r-2 border-gray-600 flex items-center justify-center">
            CLOSE
          </div>
          <div
            onClick={() => navigate("/saloons")}
            className="flex-1 flex text-md font-semibold text-sky-500 font-poppinx items-center justify-center"
          >
            APPLY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
