import React from "react";
import About from "../md7-bt2/About";
import Contact from "../md7-bt2/Contact";
import Portfolio from "../md7-bt2/Portfolio";
import Service from "./Service";
import Team from "./Team";
import "./css/style.css";
import Header from "./Header";
import { NavLink } from "react-router-dom";
export default function App() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Service />
      <Team />
      <NavLink />
    </>
  );
}
