import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcShop } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { Loading } from "../components";
import axios from "axios";

const Payment = () => {
  const id = useParams().id;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { appointmentData, user, url, getCurrentUser } = useGlobalContext();
  const bookAppoinemt = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/appointmentCreate`, {
        ...appointmentData,
        shopId: id,
        email: user.email,
        phone: user.number,
        name: user.name,
        stafId: appointmentData.stafId,
        userId: user._id,
      });
      console.log(res);
      setLoading(false);
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-screen w-full  relative py-4">
      <div className=" mx-4  flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate(`/summery/${id}`)}
          />
        </div>
        <h1
          className="text-lg font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate(`/summery/${id}`)}
        >
          Select Payment method
        </h1>
      </div>
      <div className="flex items-center mt-4 px-4 justify-between">
        <h1 className="text-sm font-bold text-gray-700">Payments</h1>
        <h1 className="text-sm font-normal font-roboto text-gray-400">
          Step 04/04
        </h1>
      </div>
      {/* <div className="mt-6 flex justify-center items-center">
        <h1 className="text-md font-bold text-gray-700 flex items-center gap-2 ">
          Amount to pay <span className="text-lg text-black">₹450</span>{" "}
        </h1>
      </div> */}
      <div className="flex flex-col mt-5 px-4 gap-3">
        <div
          onClick={() => bookAppoinemt()}
          className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center "
        >
          <div className="flex gap-1 items-center">
            <FcShop className="text-sky-600 text-4xl" />
            <h1 className="text-lg font-bold text-gray-900">Pay At Store</h1>
          </div>
        </div>
        <h1 className="text-red-400">if you click your Appoitment will book</h1>
      </div>
    </div>
  );
};

export default Payment;
