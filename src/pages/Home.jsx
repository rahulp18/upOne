import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  BottomNavBar,
  CustomSlider,
  MstBookedSaloon,
  OfferCupon,
  SaloonCard,
  SaloonHomeCard,
} from "../components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white relative ">
      <div className="w-auto h-[12rem] bg-sky-300 rounded-b-full">
        {/* Head */}
        <div className="flex justify-between items-center  p-3">
          <div className="flex gap-2 items-center justify-center">
            <div className="w-[4.5rem] h-[4.5rem] rounded-full shadow-sm relative bg-white p-[2px] flex items-center justify-center">
              <img
                src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-46623,msid-60503947/anushka-sharma-to-launch-her-own-clothing-line.jpg"
                alt="profile"
                className="rounded-full h-full w-full object-cover "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold font-roboto text-white">
                Rahul Pradhan
              </h1>
              <p className="text-white font-semibold font-poppins text-sm">
                Cuttack,Choudwar
              </p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-full relative">
            <div className="bg-red-600 rounded-full px-[5px] text-white absolute -top-1 right-0 text-sm">
              2
            </div>
            <IoIosNotifications className="text-sky-500 text-xl" />
          </div>
        </div>
        {/* Search */}
        <div className="flex mt-3 justify-center items-center">
          <div className=" max-w-xs shadow-sm gap-3 flex items-center justify-center  rounded-full pl-2 w-auto bg-white">
            <input
              placeholder="Search services"
              type="search"
              className="text-md placeholder-slate-600 w-full"
            />
            <div className="bg-[#10143d] rounded-r-full p-3 text-white">
              {" "}
              <BiSearchAlt />
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="mt-5  ">
        <h1 className="text-xl font-bold text-gray-700 ml-2">Services</h1>
        <div className="mt-3">
          <CustomSlider />
        </div>
      </div>
      {/* Near By */}
      <div className="mt-1">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="text-xl font-bold text-gray-700 ">Nearby Saloon</h1>
          <h1
            className="text-md font-semibold text-sky-500 ml-2"
            onClick={() => navigate("/saloons")}
          >
            view all
          </h1>
        </div>
        <div className="flex gap-2 items-center justify-center px-2 mt-4">
          {[1, 2].map((item) => (
            <SaloonCard key={item} />
          ))}
        </div>
      </div>
      {/* Home Service */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="text-xl font-bold text-gray-700 ">
            Saloon Service at home{" "}
          </h1>
          <h1 className="text-md font-semibold text-sky-500 ml-2">view all</h1>
        </div>
        <div className="flex gap-2 items-center justify-center overflow-hidden   mt-4">
          <SaloonHomeCard />
        </div>
      </div>
      {/* Combo Offer */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="text-xl font-bold text-gray-700 ">Combo Offer</h1>
          <h1 className="text-md font-semibold text-sky-500 ml-2">view all</h1>
        </div>
        <div className="flex gap-2 items-center justify-center overflow-hidden mt-4">
          <OfferCupon />
        </div>
      </div>
      {/* Most Booked Salon */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-2 ">
          <h1 className="text-xl font-bold text-gray-700 ">
            Most Booked Saloon
          </h1>
          <h1 className="text-md font-semibold text-sky-500 ml-2">view all</h1>
        </div>
        <div className="flex gap-2 items-center justify-center overflow-hidden mt-4">
          <MstBookedSaloon />
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Home;