import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AppoitmentCard, BottomNavBar, Layout, Loading } from "../components";
import { useGlobalContext } from "../context/context";
const Appointment = () => {
  const { fetchAppointments, appointments, loading } = useGlobalContext();

  const navigate = useNavigate();
  useEffect(() => {
    fetchAppointments("");
  }, []);

  return (
    <Layout select="appointment">
      <div className="">
        <div className=" p-4  flex gap-3 items-center justify-start">
          <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
            <FiArrowLeft
              className="text-xl font-bold"
              onClick={() => navigate(`/home`)}
            />
          </div>
          <h1
            className="text-lg font-semibold font-poppins text-center text-black cursor-pointer"
            onClick={() => navigate(`/home`)}
          >
            My Appoitment
          </h1>
        </div>
        <div className="h-full  w-full px-4  bg-white rounded-t-2xl">
          <div className="flex justify-around items-center py-4 ">
            {/* <button className="btn btn-sm bg-[#10143d] capitalize ">
              Appointments
            </button> */}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3 mb-10 px-4">
          {appointments.length === 0 ? (
            <h1 className="">Start Booking.</h1>
          ) : (
            appointments.map((item, index) => (
              <AppoitmentCard data={item} key={index} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Appointment;
