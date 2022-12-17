import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { offerData } from "../utils/data";

const OfferCupon = () => {
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
        {offerData?.slice(0, 5).map((artist) => (
          <SwiperSlide
            key={artist?.key}
            style={{ width: "90%", height: "auto" }}
            className=" animate-slideright"
          >
            <img
              src={artist?.img}
              alt="Name"
              className=" h-[9rem] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCupon;
