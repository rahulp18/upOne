import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <div className="px-4 flex flex-col gap-3 flex-wrap justify-center items-center ">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ServicesCard key={item} />
      ))}
    </div>
  );
};

export default ServicesSection;
