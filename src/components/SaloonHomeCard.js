import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";
import { MdStarRate } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const SaloonHomeCard = () => {
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
            key={artist?.key}
            style={{ width: "auto", height: "auto" }}
            className="flex rounded-lg p-2 bg-white mx-2 shadow-sm shadow-[#1b1b1b] animate-slideright"
          >
            <div className="flex gap-2 justify-center items-center  ">
              <img
                src={artist?.img}
                alt="Name"
                className="rounded-lg h-[5rem] w-[5rem] object-cover"
              />
              <div className="flex items-center justify-center flex-col px-4">
                <h1 className="text-lg font-semibold text-gray-700 font-roboto  text-center">
                  Jhon Smith
                </h1>
                <h1 className="text-md flex text-yellow-600 font-roboto text-center">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </h1>
                <h1 className="text-sm text-gray-400 font-roboto text-center">
                  Cuttack,Choudwar
                </h1>
                <h1 className=" flex items-center justify-center text-sm text-gray-400 font-roboto text-center">
                  <GoLocation /> 5km away
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaloonHomeCard;
