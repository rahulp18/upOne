import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { RiCalendarTodoFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import {
  BarberReview,
  BarberServices,
  Loading,
  PersonAbout,
} from "../components";
import { useGlobalContext } from "../context/context";

const BarberProfile = () => {
  const { loading, fetchBarberInfo, barber } = useGlobalContext();
  const navigate = useNavigate();
  const [active, setActive] = useState("about");

  const id = useParams().id;

  useEffect(() => {
    fetchBarberInfo(id);
  }, []);

  const activeStyle = "bg-[#10143d] text-white";
  const normalStyle = "text-black bg-transition";
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-sky-100 h-screen">
      <div className="p-5 rounded-2xl relative">
        <img
          src="https://media.istockphoto.com/id/1394936524/photo/young-woman-on-manicure-treatment-at-beauty-salon.jpg?b=1&s=170667a&w=0&k=20&c=CagzCZdvyu5Plh2xWgQuToSQFeWEJrZCJkWO5F5UVk8="
          alt="background"
          className="w-full h-auto object-cover max-h-[300px] rounded-2xl opacity-70"
        />
        <div
          className="absolute top-8 left-8 p-[4px] text-md bg-black rounded-lg text-white"
          onClick={() => navigate("/home")}
        >
          <AiOutlineLeft />
        </div>
        <div className="flex items-center flex-col justify-center absolute -bottom-5 left-[35%]  ">
          <div className="  h-[100px] w-[100px] bg-white rounded-2xl shadow-sm p-[3px]">
            <img
              src={barber?.image}
              alt="image"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <h1 className="text-lg font-bold font-roboto text-black">
            {barber?.name}
          </h1>
        </div>
      </div>
      <div className="-mt-9 bg-white rounded-t-3xl px-4 py-6">
        <div className="flex items-center justify-center gap-3 mt-14">
          <p className="text-sm font-semibold font-poppins text-gray-600">
            {barber?.experience} exp+
          </p>
          <p className="text-sm font-semibold font-poppins flex items-center justify-center gap-1 text-gray-600">
            <BsFillPersonFill className="text-lg" /> Age 28
          </p>
          <p className="text-sm font-semibold font-poppins flex items-center justify-center gap-1 text-gray-600">
            <RiCalendarTodoFill className="text-lg" /> 150+ bookings
          </p>
        </div>
        <div className=" ">
          <div className="h-full  w-full  bg-white rounded-t-2xl">
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
            <PersonAbout barber={barber} />
          ) : active === "review" ? (
            <BarberReview />
          ) : (
            <BarberServices />
          )}
        </div>
      </div>
    </div>
  );
};

export default BarberProfile;
