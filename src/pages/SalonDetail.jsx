import React, { useState } from "react";

import {
  AboutSection,
  ReviewSection,
  ServicesSection,
  StafSlider,
} from "../components";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SalonDetail = () => {
  const [active, setActive] = useState("about");

  const activeStyle = "bg-[#10143d] text-white";
  const normalStyle = "text-black bg-transition";
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="p-1 bg-white z-50 rounded-full w-7 h-7 absolute top-1 left-1 text-black flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate(`/saloons/${"shop"}`)}
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
        <div className="h-full  w-full px-4 -mt-4  bg-white rounded-t-2xl">
          <div className="flex justify-around items-center py-4 ">
            <button
              className={` px-4 py-1 rounded-lg   capitalize ${
                active === "about" ? activeStyle : normalStyle
              } `}
              onClick={() => setActive("about")}
            >
              About
            </button>
            <button
              className={` px-4 py-1 rounded-lg   capitalize ${
                active === "services" ? activeStyle : normalStyle
              } `}
              onClick={() => setActive("services")}
            >
              Services
            </button>
            <button
              className={` px-4 py-1 rounded-lg   capitalize ${
                active === "review" ? activeStyle : normalStyle
              } `}
              onClick={() => setActive("review")}
            >
              Review
            </button>
          </div>
        </div>
        {active === "about" ? (
          <AboutSection />
        ) : active === "review" ? (
          <ReviewSection />
        ) : (
          <ServicesSection />
        )}
      </div>
    </div>
  );
};

export default SalonDetail;
