import React from "react";
import { MdStarRate } from "react-icons/md";
const SaloonCard = () => {
  return (
    <div className="w-[100%] h-[216px] bg-black group relative rounded-3xl overflow-hidden ">
      <img
        className="w-full h-full object-cover opacity-75 rounded-xl"
        src="http://retaildesignblog.net/wp-content/uploads/2011/11/Gum-hair-salon-Milan-02.jpg"
        alt="images"
      />
      <div className="absolute bottom-0 left-0 w-full h-[3rem] flex items-center bg-white/20 opacity-1  ">
        <div className="flex justify-between w-full px-3">
          <h1 className="text-md text-white font-semibold font-roboto">
            Red Chair
          </h1>
          <div className="flex gap-1 items-center">
            <p className="text-white font-semibold">4</p>{" "}
            <MdStarRate className="text-yellow-600 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaloonCard;
