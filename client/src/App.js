import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/Contact/ContactUs";
import Sports from "./components/sports/Sports";
import Aquatics from "./components/sports/SportsPages/aquatics/src/aquatics/aquatics";
import SAC from "./components/Contact/SAC";
import Council from "./components/Contact/SportsCouncil";
import Webteam from "./components/Contact/webteam";
import BookingPage from "./components/turf-booking/BookingPage";
import AdminPage from "./components/turf-booking/AdminPage";
import GC from "./components/Gc/GC";
import SportsCalendar from "./components/EventsTimeline";
import CourtStatus from "./components/CourtStatus/CourtStatus";
import "./App.css"; // Import any additional global styles
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sports/" element={<HomePage />} />
        <Route path="/sports/contact" element={<ContactUs />} />
        <Route path="/sports/explore" element={<Sports/>} />
        <Route path="/sports/aquatics" element={<Aquatics />} />
        <Route path="/sports/SAC" element={<SAC/>} />
        <Route path="/sports/Council" element={<Council/>} />
        <Route path="/sports/Webteam" element={<Webteam/>} />
        <Route path="/sports/CourtStatus" element={<CourtStatus/>} />
        <Route path="/sports/turfbooking" element={<BookingPage/>} />
        <Route path="/sports/GC" element={<GC/>} />
        <Route path="/sports/admin-turf-booking-raj" element={<AdminPage/>} />
        <Route path="/sports/events-timeline" element={<SportsCalendar/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
