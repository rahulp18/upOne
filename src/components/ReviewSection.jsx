import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <div className="mt-4 pb-5 px-4 w-full flex flex-col items-center justify-center gap-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ReviewCard key={item} />
      ))}
    </div>
  );
};

export default ReviewSection;
