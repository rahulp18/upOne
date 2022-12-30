import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";
import { useNavigate } from "react-router-dom";

const StafSlider = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {slideData?.slice(0, 5).map((artist) => (
          <SwiperSlide
            key={artist?.key}
            style={{ width: "25%", height: "auto" }}
            className=" animate-slideright"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                onClick={() => navigate(`/barber/${Math.random() * 10}`)}
                src={artist?.img}
                alt="Name"
                className="rounded-full h-[4rem] w-[4rem] object-cover"
              />
              <h1 className="text-md font-roboto text-center">{"Rati Pro"}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StafSlider;
