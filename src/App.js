import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Appointment,
  ChooseLocation,
  Filter,
  Home,
  Login,
  Message,
  Profile,
  SaloonList,
  Service,
  SignUp,
  VerifyOtp,
  Welcome,
} from "./pages";
const App = () => {
  return (
    <div>
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
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saloons" element={<SaloonList />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
