import React from "react";

export default function Header(props) {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#F3A20D", height: "70px" }}
    >
      <div className="row">
        <h2 className="text-center text-white mt-3">{props.text}</h2>
      </div>
    </div>
  );
}
