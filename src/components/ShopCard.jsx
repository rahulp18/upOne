import React from "react";
import { MdAddLocationAlt, MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-auto flex gap-2 bg-white rounded-lg shadow-md">
      <div className="flex-1 bg-black ">
        <img
          src={data?.images[0]?.url}
          alt="shop"
          className="w-full h-full max-h-[200px] object-cover opacity-90"
        />
      </div>
      <div className="flex-1 px-3 py-2 overflow-hidden">
        <div className="text-lg font-semibold font-poppins text-gray-700">
          {data?.shopName}{" "}
        </div>

        <p className="text-sm font-roboto w-full text-gray-400">
          {data?.overview?.substring(0, 100)}
        </p>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => navigate(`/salon/${data._id}`)}
            className="btn btn-sm w-auto max-w-sm text-sm bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Book Now
          </button>
          <MdAddLocationAlt className="text-xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
