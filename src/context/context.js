import axios from "axios";
import { useState, useContext, createContext } from "react";
import { fromLngToAddress } from "../utils/geoConvter";
import { slot } from "../utils/slot";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // States

  // const url = "http://localhost:5000/api";
  const url = "https://up-onebackend-production.up.railway.app/api";
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [services, setServices] = useState([]);
  const [salons, setSalons] = useState([]);
  const [stafs, setStafs] = useState([]);
  const [bookingData, setBookingData] = useState({});
  const [slots, setSlots] = useState([]);
  const [recentBook, setRecentBook] = useState(null);
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/service`);
      console.log(res);
      setServices(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const fetchSalons = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/shop/allShop`);
      console.log(res);
      setSalons(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const logOut = (navigate) => {
    localStorage.removeItem("token");
    setUser("");
    setToken("");
    navigate("/login");
  };
  const getCurrentUser = async (navigate) => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/user`);
      console.log(res);
      setUser(res.data.data);
      // fromLngToAddress({
      //   lat: res.data.data.location.lat,
      //   lng: res.data.data.location.lng,
      // });
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Invalid token") {
        logOut(navigate);
        setLoading(false);
      }
    }
  };

  const fetchOurStafs = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/staf/client/active/${id}`);
      console.log(res);
      setLoading(false);
      setStafs(res.data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const [servicesPersalon, setServicesPerSalon] = useState([]);
  const fetchServicesPerSalon = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/service/client/${id}`);
      setServicesPerSalon(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Fetch Slots
  const [availableSlot, setAvailableSlot] = useState([]);
  const filterSlots = (data) => {
    if (data.length > 0) {
      setAvailableSlot(
        slot.filter((elem) => {
          return data.some((ele) => {
            return ele.slot_time !== elem.slot_time;
          });
        })
      );
    } else {
      setAvailableSlot(slot);
    }
  };
  const fetchSlots = async (id, date) => {
    try {
      console.log(date);
      setLoading(true);
      const res = await axios.post(`${url}/retriveSlots/${id}`, { date: date });
      setSlots(res.data.data);

      setLoading(false);
      filterSlots(res.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const [selectShopInfo, setSelectShopInfo] = useState(null);
  const getShopInfo = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/shop/${id}`);
      setSelectShopInfo(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Appointment logics
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    shopId: "",
    stafId: "",
    slot_time: "",
    slot_date: "",
  });
  const handleAppointmentOnChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const [subTotal, setSubTotal] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const fetchAppointments = async (status) => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/appointments`);
      console.log(res);
      setAppointments(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //  Fetch Shop

  return (
    <AppContext.Provider
      value={{
        url,
        loading,
        user,
        setLoading,
        setUser,
        currentUserId,
        setCurrentUserId,
        token,
        setToken,
        getCurrentUser,
        logOut,
        fetchServices,
        services,
        fetchSalons,
        salons,
        fetchOurStafs,
        stafs,
        fetchServicesPerSalon,
        servicesPersalon,
        fetchSlots,
        slots,
        handleAppointmentOnChange,
        appointmentData,
        getShopInfo,
        availableSlot,
        setAppointmentData,
        subTotal,
        setSubTotal,
        selectShopInfo,
        setRecentBook,
        recentBook,
        fetchAppointments,
        appointments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
