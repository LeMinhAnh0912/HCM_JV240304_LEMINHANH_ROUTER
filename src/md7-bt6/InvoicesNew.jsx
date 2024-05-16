import React from "react";
import { useParams } from "react-router";

export default function InvoicesNew() {
  const { id } = useParams();
  return <div>InvoicesNew {id}</div>;
}
