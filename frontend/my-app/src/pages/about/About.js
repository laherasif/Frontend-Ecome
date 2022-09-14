import React from "react";
import Alert from "../../component/alert/Alert";
import Header from "../../component/commonheader/Header";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";

export default function About() {
  return (
    <div>
      <Alert />
      <Logo />
      <Nav />
      <Header text="About" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
            <h2>The standard Lorem Ipsum</h2>
            <p className="fs-4 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className="btn rounded-5 w-50  text-white my-3 ms-5 "
              style={{ backgroundColor: "#183661" }}
            >
              See More
            </button>
          </div>
          <div className="col-md-6 my-5">
            <img src="images/black-red.png" style={{ width: "600px" }} />
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
}
