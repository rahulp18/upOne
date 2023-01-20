import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import StafSlider from "./StafSlider";

import Map from "./Map";
const AboutSection = ({ salonInfo, user }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-start flex-col gap-2 px-4">
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
                {salonInfo?.location}
              </p>
              {/* Direction */}
              <label htmlFor="map" className="">
                Direction
              </label>
              {salonInfo?.geo && (
                <Map shopLocation={salonInfo?.geo} myLocation={user?.geo} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-5">
        <p className="text-md text-left font-roboto   text-gray-700">
          {salonInfo?.overview}
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
          onClick={() => navigate(`/booksaloon/${salonInfo._id}`)}
          className="btn w-auto max-w-sm capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
        >
          Book Appointment <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
