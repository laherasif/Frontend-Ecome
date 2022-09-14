import React from "react";
import Header from "../component/header/Header";
import SideBar from "../component/sidebar/SideBar";
import "../assets/css/style.css";

export default function Layout({ children }) {
  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "lightgray", color: "black" }}
    >
      <SideBar />
      <div id="right-panel" className="right-panel" style={{ width: "100%" }}>
        <Header />
        {children}
      </div>
    </div>
  );
}
