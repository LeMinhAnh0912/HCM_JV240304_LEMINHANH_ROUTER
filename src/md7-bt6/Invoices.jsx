import React from "react";
import { NavLink } from "react-router-dom";

export default function Invoices() {
  return (
    <div>
      <h2>Invoices</h2>
      <NavLink to={"/invoices"}>Create new invoices</NavLink>
    </div>
  );
}
