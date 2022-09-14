import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#183661" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginLeft: "400px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white fs-5" to="/fashion">
                  Fashion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white fs-5" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-white fs-5  "
                  to="/contactus"
                  style={{ width: "110px" }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-white fs-5 "
                  style={{ width: "80px" }}
                  to="/signin"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-white fs-5 "
                  style={{ width: "90px" }}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
