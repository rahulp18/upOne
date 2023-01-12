import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { slideData } from "../utils/data";
import { MdStarRate } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

const SaloonHomeCard = () => {
  const { salons, loading } = useGlobalContext();
  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={15}
      freeMode
      // centeredSlides
      // centeredSlidesBounds
      modules={[FreeMode]}
      className="my-4 py-2"
    >
      {salons?.slice(0, 5).map((salon) => (
        <SwiperSlide
          key={salon?._id}
          style={{ width: "auto", height: "auto" }}
          onClick={() => navigate(`/salon/${salon?._id}`)}
          className="flex rounded-lg p-2 bg-white mx-2 shadow-sm shadow-[#1b1b1b] animate-slideright"
        >
          <div className="flex gap-2 justify-center items-center  ">
            <img
              src={salon?.images[0]?.url}
              alt="Name"
              className="rounded-lg h-[5rem] w-[5rem] object-cover"
            />
            <div className="flex items-center justify-center flex-col px-4">
              <h1 className="text-lg font-semibold text-gray-700 font-roboto  text-center">
                {salon?.shopName}
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
  );
};

export default SaloonHomeCard;
