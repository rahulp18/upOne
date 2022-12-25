import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Appointment,
  BookSaloon,
  ChooseLocation,
  ChooseStaf,
  Explore,
  Filter,
  Home,
  Login,
  Message,
  Payment,
  Profile,
  SalonDetail,
  SaloonList,
  Service,
  SignUp,
  Success,
  Summery,
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saloons/:type" element={<SaloonList />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/salon/:id" element={<SalonDetail />} />
          <Route path="/booksaloon" element={<BookSaloon />} />
          <Route path="/slot" element={<ChooseStaf />} />
          <Route path="/summery" element={<Summery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
