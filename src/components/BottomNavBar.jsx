import React from "react";
import { navLinks } from "../utils/data";
import { Link } from "react-router-dom";
const BottomNavBar = () => {
  return (
    <div className="bg-[#10143d] w-full px-2 py-4 sticky z-40 bottom-0 text-white rounded-t-3xl ">
      <div className="flex items-center justify-around gap-3">
        {navLinks.map((item) => (
          <Link to={`/${item.link}`} key={item.id}>
            <div className="flex flex-col items-center justify-center">
              {item.icon}
              <h1 className="capitalize text-md font-semibold text-white">
                {item.link}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;
