import React, { useEffect } from "react";
import { MdWifiCalling2 } from "react-icons/md";

import { useGlobalContext } from "../context/context";
import { slot } from "../utils/slot";

const AppoitmentCard = ({ data }) => {
  const {
    getShopInfo,
    selectShopInfo,
    fetchSlotInfo,
    slotInfo,
    fetchBarberInfo,
    barber,
  } = useGlobalContext();

  const pending = "text-orange-600 bg-orange-100";
  const approved = "text-green-600 bg-green-100";
  const rejected = "text-red-600 bg-red-100";
  const completed = "text-sky-600 bg-sky-100";

  useEffect(() => {
    getShopInfo(data.shopId);
    fetchSlotInfo(data.slots);
    fetchBarberInfo(data.stafId);
  }, []);
  return (
    <div className="flex shadow-lg w-[100%] max-w-lg rounded-lg ">
      <div className="basis-1/3 bg-sky-400 text-white px-2 py-4">
        <div className="flex items-center justify-center h-full gap-3 flex-col">
          <h1 className="text-xl font-semibold font-roboto ">
            {slotInfo?.slot_date}
          </h1>
          <h1 className="text-sm font-normal font-roboto ">
            {
              slot.filter(function (el) {
                return el.slot_time == slotInfo?.slot_time;
              })[0]?.time
            }
          </h1>
        </div>
      </div>

      <div className="basis-2/3 h-full  bg-white px-2 py-4">
        <h1 className="text-lg uppercase text-gray-700 font-semibold font-roboto ">
          {selectShopInfo?.shopName}
        </h1>
        <div className="flex justify-between items-start">
          <h1 className="text-md capitalize text-gray-700 font-semibold font-roboto ">
            Baber :
          </h1>

          <div className="">
            <h1 className="text-md capitalize text-gray-700 font-normal font-roboto ">
              {barber?.name}
            </h1>
            <h1 className="text-sm capitalize text-gray-700 font-normal font-roboto ">
              {data?.services.toString()}
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <button className="text-red-500 font-bold bg-red-50 border-none px-3 py-2 rounded-lg text-sm">
            Cancel
          </button>
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-sky-100 p-1 rounded-md">
              <a href={`tel:${selectShopInfo?.number}`}>
                <MdWifiCalling2 className="font-semibold text-xl text-sky-500" />
              </a>
            </div>
            <div className="  p-1 rounded-md">
              <h1
                className={`text-sm capitalize px-2 py-[2px]  font-normal font-roboto ${
                  data?.status === "pending"
                    ? pending
                    : data?.status === "approved"
                    ? approved
                    : data?.status == "completed"
                    ? completed
                    : data.status === rejected
                    ? rejected
                    : "text-gray-600 bg-gray-100"
                } `}
              >
                {data.status}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoitmentCard;
