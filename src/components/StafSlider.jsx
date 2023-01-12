import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const StafSlider = () => {
  const { stafs } = useGlobalContext();
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
        {stafs?.slice(0, 5).map((staf) => (
          <SwiperSlide
            key={staf?._id}
            style={{ width: "25%", height: "auto" }}
            className="animate-slideright"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                onClick={() => navigate(`/barber/${staf._id}`)}
                src={staf?.image}
                alt="Name"
                className="rounded-full h-[4rem] w-[4rem] object-cover"
              />
              <h1 className="text-md font-roboto text-center">{staf?.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StafSlider;
