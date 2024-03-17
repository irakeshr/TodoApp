import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>about</Link>
    </div>
  );
}
