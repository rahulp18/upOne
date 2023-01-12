import React from "react";

const PersonAbout = ({ barber }) => {
  return (
    <div className="">
      <h1 className="text-md font-semibold text-gray-600">
        Service that i Provide
      </h1>
      <div className="flex items-center mt-5 gap-2 flex-wrap">
        {barber?.skills.map((skill) => (
          <div className="bg-gray-100 font-semibold text-md shadow-sm rounded-sm px-2 capitalize py-1 text-gray-600">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonAbout;
