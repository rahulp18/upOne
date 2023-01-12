import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const BookSaloon = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const {
    servicesPersalon,
    fetchServicesPerSalon,
    setAppointmentData,
    appointmentData,
  } = useGlobalContext();
  useEffect(() => {
    fetchServicesPerSalon(id);
  }, []);

  const [userinfo, setUserInfo] = useState({
    services: [],
  });
  console.log(userinfo);
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { services } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        services: [...services, value],
        services: [...services, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        services: services.filter((e) => e !== value),
        services: services.filter((e) => e !== value),
      });
    }
  };
  const handleSubmit = () => {
    setAppointmentData({
      ...appointmentData,
      services: userinfo.services,
    });
    navigate(`/slot/${id}`);
  };

  return (
    <div className="h-screen layout relative w-full">
      <div className="">
        <div className="mx-4 my-5 flex gap-3 items-center justify-start">
          <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
            <FiArrowLeft
              className="text-xl font-bold"
              onClick={() => navigate(`/salon/${id}`)}
            />
          </div>
          <h1
            className="text-lg font-semibold font-poppins text-black cursor-pointer"
            onClick={() => navigate(`/salon/${id}`)}
          >
            Book Appoitment
          </h1>
        </div>
        <div className="h-auto mt-5 pb-10">
          <div className="flex items-center px-4 justify-between ">
            <h1 className="text-sm font-bold text-gray-700">Choose Services</h1>
            <h1 className="text-sm font-normal font-roboto text-gray-400">
              Step 01/03
            </h1>
          </div>
          <div className="text-xl  font-bold mt-9 font-roboto px-4">
            Red Chair Saloon
          </div>
          <div className="mt-5 h-auto px-4 py-2 w-full bg-sky-50 rounded-t-2xl">
            <div className="mt-4 flex justify-between items-center">
              <h1 className="text-md font-semibold text-black font-poppins">
                Choose your Service
              </h1>
              <select className="select select-sm  max-w-xs">
                <option disabled selected>
                  Select here ?
                </option>
                <option>Facial</option>
                <option>Massage</option>
                <option>Bleach</option>
              </select>
            </div>
            <div className="flex gap-2 flex-col justify-center mt-5">
              {servicesPersalon.map((item, index) => (
                <div
                  key={index}
                  className="p-3 py-4 flex justify-between items-center bg-white rounded-xl shadow-sm"
                >
                  <div className="flex gap-2 items-center ">
                    <input
                      type="checkbox"
                      className="checkbox bg-gray-100"
                      value={item.serviceName}
                      onChange={handleChange}
                    />
                    <div className="flex flex-col ">
                      <h1 className="text-lg font-poppins font-semibold ">
                        {item?.serviceName}
                      </h1>
                      <p className="text-sm text-gray-600 ">40min</p>
                    </div>
                  </div>
                  <h1 className="text-lg font-poppins font-semibold">
                    {item?.price}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 sticky bottom-0 w-full  text-white bg-[#10143d] rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-lg font-poppins font-semibold ">
              {userinfo.services.length} Services
            </h1>
          </div>
          <button
            onClick={() => handleSubmit()}
            className="btn w-auto max-w-xs capitalize text-md font-semibold bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            Continue <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSaloon;
