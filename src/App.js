import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Appointment,
  BarberProfile,
  BookSaloon,
  ChooseLocation,
  ChooseStaf,
  Explore,
  Filter,
  GoogleMap,
  Home,
  Login,
  Message,
  Payment,
  Profile,
  SalonDetail,
  SaloonList,
  Service,
  SettingAcc,
  SignUp,
  Success,
  Summery,
  VerifyOtp,
  Welcome,
} from "./pages";
const App = () => {
  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/location" element={<ChooseLocation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saloons/:type" element={<SaloonList />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/salon/:id" element={<SalonDetail />} />
          <Route path="/booksaloon/:id" element={<BookSaloon />} />
          <Route path="/slot/:id" element={<ChooseStaf />} />
          <Route path="/summery/:id" element={<Summery />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/settingAcc" element={<SettingAcc />} />

          <Route path="/barber/:id" element={<BarberProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
