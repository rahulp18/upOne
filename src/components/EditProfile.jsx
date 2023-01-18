import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

const EditProfile = ({ user }) => {
  const { loading, url, getCurrentUser, token } = useGlobalContext();
  const [updating, setUpdating] = useState(false);
  const initialState = {
    name: user?.name,
    email: user?.email,
    number: user?.number,
  };
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUpdating(true);
      const { data } = await axios.put(`${url}/user/update`, formData);
      console.log(data);
      setUpdating(false);
      toast.success(`Updated`);
      getCurrentUser();
    } catch (error) {
      setUpdating(false);
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="">
            <h1 className="text-md font-semibold text-gray-600">
              Edit Profile
            </h1>
            {loading ? (
              <Loading />
            ) : (
              <form
                action=""
                className=" flex flex-col items-start justify-center gap-2 mt-4"
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  name="name"
                  onChange={onChange}
                  className="input input-sm input-bordered  w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  value={formData.email}
                  name="email"
                  onChange={onChange}
                  className="input input-sm input-bordered  w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Number"
                  value={formData.number}
                  name="number"
                  onChange={onChange}
                  className="input input-sm input-bordered  w-full max-w-xs"
                />
                <button type="submit" className="btn btn-sm max-w-sm w-full">
                  {updating ? "Updating..." : "update"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
