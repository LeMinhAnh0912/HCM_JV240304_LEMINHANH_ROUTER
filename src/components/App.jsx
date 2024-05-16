import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";
import { NavLink, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      App
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/portfolio"}>Port</NavLink>
    </>
  );
}
