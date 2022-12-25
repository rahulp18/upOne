import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiComb } from "react-icons/gi";
import { RxScissors } from "react-icons/rx";
// import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import bookAni from "../assets/booked.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: bookAni,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full  relative py-4">
      <div className="mt-8 flex items-center justify-center">
        {/* <Lottie options={defaultOptions} height={250} width={250} /> */}
      </div>
      <div className="flex items-center gap-4 justify-center flex-col">
        <h1 className="text-sky-600  font-poppins font-semibold text-2xl ">
          Booking Confirmed !
        </h1>
        <div className="text-gray-700 text-center  text-md px-4">
          A confirm message has sent to your register mobile number
        </div>
      </div>
      <div className="bg-sky-100 mt-9 flex flex-col gap-2 p-2 rounded-sm">
        <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
          <div className="flex gap-1 items-center">
            <AiOutlineFieldTime className="text-sky-600 text-2xl" />
            <h1 className="text-sm font-bold text-gray-700">Appoitment Time</h1>
            <p className="text-sm text-black font-roboto">12AM 20 OCT</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
          <div className="flex gap-1 items-center">
            <GiComb className="text-sky-600 text-2xl" />
            <h1 className="text-sm font-bold text-gray-700">Barber Shop </h1>
            <p className="text-sm text-black font-roboto ">Red Chair</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
          <div className="flex gap-1 items-center">
            <RxScissors className="text-sky-600 text-2xl" />
            <h1 className="text-sm font-bold text-gray-700">Service </h1>
            <p className="text-sm text-black font-roboto">Hair Cut</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 absolute bottom-0 w-full  text-white bg-[#10143d] rounded-t-xl">
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/home")}
            className="btn w-auto max-w-xs capitalize text-md px-9 font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
