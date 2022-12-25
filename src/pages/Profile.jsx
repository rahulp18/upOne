import React from "react";
import {
  BsCalendarCheck,
  BsCreditCard2Back,
  BsPersonFill,
} from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { MdHelpCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { VscTerminalBash } from "react-icons/vsc";
import { Layout } from "../components";
import { GoSignOut } from "react-icons/go";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Layout select="profile">
      <div className="px-4 py-2">
        <div className="p-1 bg-sky-500 z-50 rounded-full w-7 h-7  top-2 left-1 text-white flex items-center justify-center cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/home")}
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-white p-[2px] border-[3px] border-sky-400 overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg"
              alt="profile"
              className="h-full object-cover rounded-full w-full"
            />
          </div>
          <h1 className="text-lg font-bold text-gray-700">Virat Kohli</h1>
          {/* ACTIONS */}
          <div className="flex flex-col gap-4 items-stretch">
            <div className="px-3 flex items-center justify-start gap-4 py-1 rounded-lg shadow-md border-2 border-gray-400">
              <BsPersonFill className="text-gray-600 text-3xl" />
              <div className="flex flex-col  items-start">
                <h1 className="text-md font-bold text-gray-900 font-roboto">
                  Account Settings
                </h1>
                <h1 className="text-sm font-semibold text-gray-700  ">
                  Name, email, contact number
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center justify-start gap-4 py-1 rounded-lg shadow-md border-2 border-gray-400">
              <BsCreditCard2Back className="text-gray-600 text-3xl" />
              <div className="flex flex-col  items-start">
                <h1 className="text-md font-bold text-gray-900 font-roboto">
                  Payment Method
                </h1>
                <h1 className="text-sm font-semibold text-gray-700  ">
                  add a new payment card
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center justify-start gap-4 py-1 rounded-lg shadow-md border-2 border-gray-400">
              <MdHelpCenter className="text-gray-600 text-3xl" />
              <div className="flex flex-col  items-start">
                <h1 className="text-md font-bold text-gray-900 font-roboto">
                  Help Center
                </h1>
                <h1 className="text-sm font-semibold text-gray-700  ">
                  Get a help from chat bot queries
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center justify-start gap-4 py-1 rounded-lg shadow-md border-2 border-gray-400">
              <BsCalendarCheck className="text-gray-600 text-2xl" />
              <div className="flex flex-col  items-start">
                <h1 className="text-md font-bold text-gray-900 font-roboto">
                  My Booking
                </h1>
                <h1 className="text-sm font-semibold text-gray-700  ">
                  Manage your booking system
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center justify-start gap-4 py-1 rounded-lg shadow-md border-2 border-gray-400">
              <VscTerminalBash className="text-gray-600 text-2xl" />
              <div className="flex flex-col  items-start">
                <h1 className="text-md font-bold text-gray-900 font-roboto">
                  Terms and Services
                </h1>
                <h1 className="text-sm font-semibold text-gray-700  ">
                  See our terms and services
                </h1>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="bg-sky-500 mt-5 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
            <GoSignOut />
            Sign out
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
