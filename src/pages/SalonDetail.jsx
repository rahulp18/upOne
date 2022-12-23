import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { StafSlider } from "../components";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SalonDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="p-1 bg-white z-50 rounded-full w-7 h-7 absolute top-1 left-1 text-black flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate("/saloons")}
        />
      </div>
      <div className="w-[100%] h-[216px] bg-black group relative  overflow-hidden ">
        <img
          className="w-full h-full object-cover opacity-75"
          src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-853427.jpg&fm=jpg"
          alt="images"
        />
        <div className="absolute bottom-0 left-0 w-full h-[5rem] flex items-start bg-black/40 opacity-1  ">
          <div className="flex justify-between items-center w-full mt-3 px-3">
            <h1 className="text-md text-white font-semibold font-roboto">
              Red Chair
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-white ">Today's booking</p>
              <div className="flex">
                <img
                  src="https://images.statusfacebook.com/profile_pictures/Beautiful/Beautiful_Profile_Picture61.jpg"
                  alt="image"
                  className="w-6 h-6 object-cover rounded-full"
                />
                <img
                  src="https://images.statusfacebook.com/profile_pictures/Beautiful/Beautiful_Profile_Picture04.jpg"
                  alt="image"
                  className="w-6 h-6  object-cover rounded-full"
                />
                <img
                  src="https://cdn2.sharechat.com/beautifulgirlprofilepicture_2af4ace9_1601227877970_cmprsd_40.jpg"
                  alt="image"
                  className="w-6 h-6  object-cover rounded-full"
                />
                <div className="w-6  flex items-center justify-center h-6 rounded-full bg-sky-200 font-bold font-poppins text-black">
                  <span className="text-xs">3+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 ">
        <div className="h-full  w-full px-4  -mt-4 bg-white rounded-t-2xl">
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
        </div>
        <div className="flex justify-between px-4">
          <div className=" justify-start flex">
            <div className="flex items-center gap-2 first-letter:justify-center">
              <div className="bg-sky-100 p-3 rounded-xl">
                <IoMdTime className="font-semibold text-2xl text-sky-500" />
              </div>
              <div className="flex gap-1 justify-center flex-col items-start">
                <p className="text-sm text-gray-400 font-semibold">Time</p>
                <p className="text-sm  text-gray-900 font-semibold">
                  9.00 AM - 10.00 PM
                </p>
              </div>
            </div>
          </div>
          <div className=" justify-start flex">
            <div className="flex items-center gap-2 justify-center">
              <div className="bg-sky-100 p-3 rounded-xl">
                <MdOutlineLocationOn className="font-semibold text-2xl text-sky-500" />
              </div>
              <div className="flex gap-1 justify-center flex-col items-start">
                <p className="text-sm text-gray-400 font-semibold">Location</p>
                <p className="text-sm  text-gray-900 font-semibold ">
                  Choudwar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-5">
          <p className="text-md text-left font-roboto   text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iusto atque, libero beatae nostrum veniam distinctio itaque incidunt
            ratione, similique consequatur delectus accusamus, deserunt
            cupiditate explicabo cumque eveniet reprehenderit voluptas optio
            nihil. Nostrum amet exercitationem cupiditate reprehenderit, vel
            quo, voluptatem possimus dolores similique tenetur quae.
          </p>
        </div>
        <div className="mt-4 px-4">
          <h1 className="text-lg font-bold text-gray-700 ">Our Staf</h1>
          <StafSlider />
        </div>
        <div className="px-4 py-5 mt-5 flex justify-between items-center">
          <div className="bg-sky-100 p-3 rounded-xl">
            <AiOutlineMessage className="font-semibold text-2xl text-sky-500" />
          </div>
          <button
            onClick={() => navigate("/booksaloon")}
            className="btn w-auto max-w-sm capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Book Appointment <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonDetail;
