import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";

import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const MstBookedSaloon = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        freeMode
        centeredSlides
        // centeredSlidesBounds

        modules={[FreeMode]}
        className="p-6"
      >
        {slideData?.slice(0, 5).map((artist) => (
          <SwiperSlide
            onClick={() => navigate(`/salon/${2}`)}
            key={artist?.key}
            style={{ width: "auto", height: "auto" }}
            className="flex rounded-lg p-2 bg-white mx-2 shadow-sm shadow-[#1b1b1b] animate-slideright"
          >
            <div className="flex flex-col gap-2 justify-center items-center  ">
              <img
                src={artist?.img}
                alt="Name"
                className="rounded-lg h-[5rem] w-[100%] object-cover"
              />
              <div className="flex gap-5 items-center justify-between ">
                <h1 className="text-md font-semibold text-gray-700 font-roboto  text-center">
                  Demand
                </h1>

                <h1 className=" flex items-center justify-center text-sm text-gray-400 font-roboto text-center">
                  <GoLocation /> 5km
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MstBookedSaloon;
