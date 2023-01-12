import React, { useEffect, useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { GiComb } from "react-icons/gi";
import { RxScissors } from "react-icons/rx";
import { ImLocation2 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { useGlobalContext } from "../context/context";
import { slot } from "../utils/slot";
import moment from "moment/moment";
import axios from "axios";
import { Loading } from "../components";

const Summery = () => {
  const { appointmentData, getShopInfo, selectShopInfo, url } =
    useGlobalContext();
  const [stafInfo, setStafInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const timeWithDate = () => {
    // console.log(slot[parseInt(appointmentData.slot_time) - 1]);
    const time = slot[parseInt(appointmentData.slot_time) - 1].time;
    const date = moment(appointmentData.slot_date).format("YYYY-MM-DD");
    return `${time}-${date}`;
  };

  const fetchBarberInfo = async (req, res) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/staf/${appointmentData.stafId}`);
      setStafInfo(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getShopInfo(id);
    fetchBarberInfo();
  }, []);

  const navigate = useNavigate();
  const id = useParams().id;
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-screen w-full  relative py-4">
      <div className=" mx-4  flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate(`/slot/${id}`)}
          />
        </div>
        <h1
          className="text-lg font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate(`/slot/${id}`)}
        >
          Back
        </h1>
      </div>
      <div className="flex items-center mt-4 px-4 justify-between">
        <h1 className="text-sm font-bold text-gray-700">Summery</h1>
        <h1 className="text-sm font-normal font-roboto text-gray-400">
          Step 03/04
        </h1>
      </div>
      {/* Body */}
      <div className="mt-6 px-4">
        <h1 className="text-lg font-semibold  font-poppins text-gray-700">
          Review and confirm
        </h1>
        <div className="bg-sky-100 flex flex-col gap-2 p-2 mt-5 rounded-sm">
          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
            <div className="flex gap-1 items-center">
              <AiOutlineFieldTime className="text-sky-600 text-2xl" />
              <h1 className="text-sm font-bold text-gray-700">Pickking Time</h1>
              <p className="text-sm text-gray-400">{timeWithDate()}</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
            <div className="flex gap-1 items-center">
              <GiComb className="text-sky-600 text-2xl" />
              <h1 className="text-sm font-bold text-gray-700">Barber Shop </h1>
              <p className="text-sm text-gray-400">
                {selectShopInfo?.shopName}
              </p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
            <div className="flex gap-1 items-center">
              <RxScissors className="text-sky-600 text-2xl" />
              <h1 className="text-sm font-bold text-gray-700">Service </h1>
              <p className="text-sm text-gray-400">
                {appointmentData.services.toString()}
              </p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
            <div className="flex gap-1 items-center">
              <IoPerson className="text-sky-600 text-2xl" />
              <h1 className="text-sm font-bold text-gray-700">Barber </h1>
              <p className="text-sm text-gray-400">{stafInfo?.name} </p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center ">
            <div className="flex gap-1 items-start">
              <ImLocation2 className="text-sky-600 text-2xl" />
              <h1 className="text-sm font-bold text-gray-700">Location </h1>
              <p className="text-sm text-gray-400 flex flex-col gap-1">
                <div className="">Lat: {selectShopInfo?.location?.lat}</div>
                <div className=""> Lng: {selectShopInfo?.location?.lng}</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 absolute bottom-0 w-full  text-white bg-[#10143d] rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-lg font-poppins font-semibold ">
              {appointmentData.services.length} Services
            </h1>
          </div>
          <button
            onClick={() => navigate(`/payment/${id}`)}
            className="btn w-auto max-w-xs capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Next <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summery;
