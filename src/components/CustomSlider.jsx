import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";
import { useGlobalContext } from "../context/context";

const CustomSlider = () => {
  const { services } = useGlobalContext();
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
        {services?.slice(0, 5).map((service) => (
          <SwiperSlide
            key={service?._id}
            style={{ width: "25%", height: "auto" }}
            className=" animate-slideright"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={service?.image}
                alt="Name"
                className="rounded-full h-[5rem] w-[5rem] object-cover"
              />
              <h1 className="text-md font-roboto text-center">
                {service?.serviceName}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
