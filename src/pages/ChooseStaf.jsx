import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { FiArrowLeft } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components";
import { useGlobalContext } from "../context/context";
import { times } from "../utils/data";
import { slot } from "../utils/slot";
const ChooseStaf = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const {
    url,
    fetchSlots,
    slots,
    loading,
    availableSlot,
    handleAppointmentOnChange,
    appointmentData,
    setAppointmentData,
  } = useGlobalContext();
  const [loadingS, setLoadingS] = useState(false);
  const [value, onChange] = useState(new Date());
  const [stafs, setStafs] = useState([]);
  const toDay = new Date();

  const fetchStafs = async () => {
    try {
      setLoadingS(true);
      const res = await axios.get(`${url}/staf/client/active/${id}`);
      setStafs(res.data.data);
      setLoadingS(false);
    } catch (error) {
      console.log(error);
      setLoadingS(false);
    }
  };
  console.log(appointmentData);
  useEffect(() => {
    setAppointmentData({
      ...appointmentData,
      slot_date: moment(value).format("YYYY-MM-DD"),
    });
    fetchSlots(id, moment(value).format("YYYY-MM-DD"));
  }, [value]);

  useEffect(() => {
    fetchStafs();
  }, []);

  return (
    <div className="h-screen w-full  relative py-4">
      <div className="">
        <div className=" mx-4  flex gap-3 items-center justify-start">
          <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
            <FiArrowLeft
              className="text-xl font-bold"
              onClick={() => navigate(`/booksaloon/${id}`)}
            />
          </div>
          <h1
            className="text-lg font-semibold font-poppins text-black cursor-pointer"
            onClick={() => navigate(`/booksaloon${id}`)}
          >
            Back
          </h1>
        </div>
        <div className="flex items-center mt-4 px-4 justify-between">
          <h1 className="text-sm font-bold text-gray-700">Appoitment</h1>
          <h1 className="text-sm font-normal font-roboto text-gray-400">
            Step 02/04
          </h1>
        </div>
        <div className="px-4 mt-5 flex gap-3 items-start flex-col">
          <h1 className="text-xl font-roboto text-black">Choose Staf</h1>
          <div className="flex gap-6 mt-3 uppercase flex-col">
            {loadingS ? (
              <Loading />
            ) : stafs.length === 0 ? (
              <h1 className="text-md ">No Staf available</h1>
            ) : (
              stafs.map((staf, index) => (
                <label
                  class="flex items-center justify-start gap-1 cursor-pointer"
                  key={index}
                >
                  <span class="text-sm font-normal font-roboto">
                    <div className="flex items-center justify-center relative ml-5 ">
                      <img
                        src={staf?.image?.url}
                        alt="staf"
                        className="h-12 w-12 rounded-full object-cover absolute -left-4"
                      />
                      <div className="text-black bg-gray-50 border-[1px] px-3 py-1 rounded-lg  border-gray-400 w-full shadow-sm">
                        <h1 className="text-md font-poppins font-semibold ml-7">
                          {staf?.name}
                        </h1>
                      </div>
                    </div>
                  </span>
                  <input
                    type="radio"
                    value={staf._id}
                    onChange={handleAppointmentOnChange}
                    name="stafId"
                    class="radio checked:bg-sky-600"
                  />
                </label>
              ))
            )}
          </div>
          <div className="mt-5 flex items-center justify-between w-full">
            <h2 className="text-md font-semibold text-gray-600">Choose Date</h2>
            <DatePicker
              onChange={onChange}
              value={value}
              minDate={moment().toDate()}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-md font-semibold text-gray-600">
              Select From Available slot
            </h2>
            <div className="flex flex-wrap gap-3 mt-5">
              {loading ? (
                <Loading />
              ) : availableSlot.length === 0 ? (
                <h1>No slot</h1>
              ) : (
                availableSlot.map((item, index) => (
                  <div className="" key={index}>
                    <div class="form-control bg-gray-100 px-2 flex flex-col items-center justify-center h-auto rounded-xl shadow-sm border-[1px] border-gray-400 ">
                      <label class="flex items-center justify-center gap-1 cursor-pointer">
                        <span class="text-sm font-normal font-roboto">
                          {item.time}
                        </span>
                        <input
                          type="radio"
                          value={item.slot_time}
                          onChange={handleAppointmentOnChange}
                          name="slot_time"
                          class="radio checked:bg-sky-600"
                        />
                      </label>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 mt-5 absolute bottom-0 w-full  text-white bg-[#10143d] rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-lg font-poppins font-semibold ">
              {appointmentData.services.length} Services
            </h1>
          </div>
          <button
            onClick={() => navigate(`/summery/${id}`)}
            className="btn w-auto max-w-xs capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Next <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseStaf;
