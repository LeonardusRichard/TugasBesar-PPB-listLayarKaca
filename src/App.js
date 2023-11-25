import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiMovieLine, RiSearch2Line, RiHome2Line } from "react-icons/ri"; // Mengganti simbol untuk Home dan Pencarian
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPages";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/HomeMovie";
// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/movie" element={<LandingPage />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
        <footer>
          <NavLink to="/home" className="iconWrapper">
            <RiHome2Line className="icon" /> {/* Mengganti simbol untuk Home */}
            Home
          </NavLink>
          <NavLink to="/" className="iconWrapper">
            <RiSearch2Line className="icon" /> {/* Mengganti simbol untuk Pencarian */}
            Pencarian
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <HiOutlineUserGroup className="icon" />
            Profile
          </NavLink>
          <NavLink to="/about" className="iconWrapper">
            <RiMovieLine className="icon" />
            About
          </NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;
