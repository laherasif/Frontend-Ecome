import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Logo({ load }) {
  const [carts, setCarts] = useState("");

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("carts"));
    setCarts(localData?.length);
  }, [load]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5">
            <span className="ms-5">
              <i className="fa fa-envelope fs-5" aria-hidden="true"></i>
              <span className="ms-2 fs-5">haseebansare19@gmail.com</span>
            </span>
          </div>
          <div className="col-sm-4 ">
            <img
              src="images/logo.png"
              style={{
                width: "150px",
                marginTop: "-5px",
              }}
            />
          </div>
          <div className="col-sm-3">
            <span>
              <Link to="/cart">
                <i className="fa fa-shopping-bag fs-5" aria-hidden="true"></i>
              </Link>
              <span
                style={{
                  padding: "0px 5px",
                  borderRadius: "24px",
                  position: "relative",
                  top: "-8px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {carts}
              </span>
              <button
                type="button"
                className="btn rounded-5 ms-5 text-white"
                style={{ backgroundColor: "#183661" }}
              >
                Order Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
