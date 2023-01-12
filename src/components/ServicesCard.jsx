import React from "react";
import { MdStarRate } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";

const ServicesCard = ({ data }) => {
  return (
    <div className="relative flex items-center justify-center w-auto ">
      <div className="h-20 w-20 rounded-full overflow-hidden absolute left-0 p-[2px] border-2 bg-white border-gray-400">
        <img
          src={data?.image}
          alt="services"
          className="h-full w-full rounded-full object-cover "
        />
      </div>
      <div className="ml-16 px-9 w-full flex py-1  justify-center items-center flex-col border-2 border-gray-400 rounded-sm ">
        <h1 className="text-md font-poppins font-semibold text-gray-600">
          {data?.serviceName}
        </h1>
        <div className="flex items-center gap-1 text-sm text-yellow-600">
          {[1, 2, 3, 4].map((item) => (
            <MdStarRate key={item} />
          ))}
        </div>
        <p className="text-gray-600 text-sm ">In 30 min</p>
      </div>
      <div className="bg-[#10143d] text-white text-xl p-1 rounded-full -ml-3">
        <BiChevronRight />
      </div>
    </div>
  );
};

export default ServicesCard;
