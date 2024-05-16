import React from "react";
import Invoices from "./Invoices";
import InvoicesNew from "./InvoicesNew";
import Expenses from "./Expenses";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import "./style.css";
export default function App() {
  return (
    <>
      <h2 className="h2">RIKKEI ACACDEMY</h2>
      <Routes>
        <Route path="*" element={""}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
        <Route path="/invoices/:id" element={<InvoicesNew />}></Route>
        <Route path="/expenses" element={<Expenses />}></Route>
      </Routes>
      <NavLink to={"/invoices"}>Invoices</NavLink>
      <NavLink to={"/expenses"}>Expenses</NavLink>
    </>
  );
}
