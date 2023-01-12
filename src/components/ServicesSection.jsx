import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesSection = ({ services }) => {
  return (
    <div className="px-4 flex flex-col gap-3 flex-wrap justify-center items-center ">
      {services.map((item, index) => (
        <ServicesCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ServicesSection;
