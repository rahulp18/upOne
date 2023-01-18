import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { EditProfile, Loading } from "../components";
import { useGlobalContext } from "../context/context";

const SettingAcc = () => {
  const navigate = useNavigate();
  const { getCurrentUser, user, loading } = useGlobalContext();

  useEffect(() => {
    getCurrentUser();
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-screen px-4 py-2">
      <div className="p-1 bg-sky-500 z-50 rounded-full w-7 h-7  top-2 left-1 text-white flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="mt-4">
        <h1 className="text-lg font-semibold">Pesonal Info</h1>
        <div className="flex flex-col items-start justify-start gap-2 mt-6 relative">
          <div className="flex flex-col  ">
            <h1 className="text-md font-normal text-gray-400">Name</h1>
            <h1 className="text-md font-semibold">{user?.name}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-normal text-gray-400">Email</h1>
            <h1 className="text-md font-semibold">{user?.email}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-normal text-gray-400">Ph. No.</h1>
            <h1 className="text-md font-semibold">{user?.number}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-normal text-gray-400">Location</h1>
            <h1 className="text-md font-semibold">Choudwar,Cuttack,754025</h1>
          </div>

          <div className="absolute text-white bg-sky-600 top-0 right-0 p-1 rounded-full shadow">
            <label htmlFor="profile">
              {" "}
              <MdEdit />{" "}
            </label>
          </div>

          <EditProfile user={user} />
        </div>
      </div>
    </div>
  );
};

export default SettingAcc;
