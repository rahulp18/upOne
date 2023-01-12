import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ShopCard } from "../components";
import { useGlobalContext } from "../context/context";
import { shopData } from "../utils/data";

const SaloonList = () => {
  const [isClick, setIsClick] = useState("nearby");
  const { loading, fetchSalons, salons } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSalons();
  }, []);

  return (
    <div className="h-screen bg-sky-50 px-3  py-5 pb-12">
      <div className="flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer  ">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/home")}
          />
        </div>
        <h1
          className="text-md font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate("/home")}
        >
          back
        </h1>
      </div>
      <div className="flex justify-between items-center mt-9">
        <div className=" shadow-sm gap-3 flex items-center justify-center w-max-lg  rounded-full pl-2  bg-white">
          <input
            placeholder="Search for saloons nearby"
            type="search"
            className="text-md placeholder-slate-600 w-full"
          />
          <div className="bg-[#10143d] rounded-r-full p-3 text-white">
            {" "}
            <BiSearchAlt />
          </div>
        </div>
        <IoFilter
          className="text-2xl  cursor-pointer"
          onClick={() => navigate("/filter")}
        />
      </div>
      <div className="flex justify-between  items-center gap-5 mt-8">
        <div
          className="flex items-center justify-center flex-col gap-1"
          onClick={() => setIsClick("nearby")}
        >
          <h1
            className={`text-lg font-poppins font-semibold ${
              isClick === "nearby" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            Nearby Salon
          </h1>
          <div
            className={`w-[20%] h-[5px] rounded-xl ${
              isClick === "nearby" ? "block" : "hidden"
            } bg-[#10143d]`}
          ></div>
        </div>
        <div
          className="flex items-center justify-center flex-col gap-1"
          onClick={() => setIsClick("visited")}
        >
          <h1
            className={`text-lg font-poppins font-semibold  ${
              isClick === "visited" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            Most visited
          </h1>
          <div
            className={`w-[20%] h-[5px] rounded-xl ${
              isClick === "visited" ? "block" : "hidden"
            } bg-[#10143d]`}
          ></div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex h-auto flex-col gap-3 py-5  ">
        {salons.map((data) => (
          <ShopCard data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default SaloonList;
