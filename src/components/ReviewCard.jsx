import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
const ReviewCard = () => {
  return (
    <div className="px-4 py-3 rounded-lg shadow-md border-2 border-gray-200 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full bg-white p-[2px] border-[2px] border-sky-400 overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg"
              alt="profile"
              className="h-full object-cover rounded-full w-full"
            />
          </div>
          <div className="flex flex-col  items-start">
            <h1 className="text-md font-bold text-gray-900 font-roboto">
              Virat Kohli
            </h1>
            <h1 className="text-sm font-semibold text-gray-700  ">
              oct 14 2022
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-600">
          {[1, 2, 3, 4, 5].map((item) => (
            <MdStarRate key={item} />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          reiciendis deserunt ipsum hic cum modi quis dolor molestias commodi
          repudiandae totam qui, nisi enim. Aspernatur, consectetur! Beatae
          repudiandae incidunt doloribus.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="flex items-center justify-center gap-1">
          <AiOutlineHeart className="text-xl text-gray-600" />
          <p className="text-gray-600 text-sm">Like</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <BsReplyFill className="text-xl text-gray-600" />
          <p className="text-gray-600 text-sm">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
