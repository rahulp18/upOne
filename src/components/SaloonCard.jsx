import React from "react";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SaloonCard = ({ salon }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[100%] h-[216px] bg-black group relative rounded-3xl overflow-hidden "
      onClick={() => navigate(`/salon/${salon?._id}`)}
    >
      <img
        className="w-full h-full object-cover opacity-75 rounded-xl"
        src={salon?.images[0]?.url}
        alt="images"
      />
      <div className="absolute bottom-0 left-0 w-full h-[3rem] flex items-center bg-white/20 opacity-1  ">
        <div className="flex justify-between w-full px-3">
          <h1 className="text-md text-white font-semibold font-roboto">
            {salon?.shopName}
          </h1>
          <div className="flex gap-1 items-center">
            <p className="text-white font-semibold"></p>{" "}
            <MdStarRate className="text-yellow-600 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaloonCard;
