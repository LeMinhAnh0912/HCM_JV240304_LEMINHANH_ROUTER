import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function App() {
  return (
    <>
      App
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
