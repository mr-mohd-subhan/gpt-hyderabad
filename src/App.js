import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Places from './pages/Places';
import Future from './pages/Future';
import Cse from './pages/Cse';
import Ece from './pages/Ece';
import Au from './pages/Au';
import Ce from './pages/Ce';
import Eee from './pages/Eee';
import Me from './pages/Me';
import Download from "./pages/Download";
import Exams from './pages/Exams';
import Hostel from './pages/Hostel'
import Events from './pages/Events'
import Pharmacy from './pages/Pharmacy';
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/ContactUs";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/download" element={<Download />} />
          <Route path="/future" element={<Future />} />
          <Route path="/courses/cse" element={<Cse />} />
          <Route path="/courses/ece" element={<Ece />} />
          <Route path="/courses/au" element={<Au />} />
          <Route path="/courses/ce" element={<Ce />} />
          <Route path="/courses/eee" element={<Eee />} />
          <Route path="/courses/me" element={<Me />} />
          <Route path="/courses/ph" element={<Pharmacy />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hostel" element={<Hostel />} />
        </Routes>
        <ContactUs />
      </div>
    </Router>
  );
}
export default App;
