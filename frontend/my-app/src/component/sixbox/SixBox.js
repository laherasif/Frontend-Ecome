import React from "react";
export default function SixBox() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#F2C119" }}
          >
            <div className=" text-center my-4">
              <i>
                <img src="images/shoes.png" alt="#" />
              </i>
              <br />
              <span className="fs-4 text-white">Shoes</span>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#183661" }}
          >
            <div className="text-center my-4">
              <i>
                <img src="images/underwear.png" alt="#" />
              </i>
              <br />
              <span className="fs-4 text-white">UnderWear</span>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#F2C119" }}
          >
            <div className="text-center my-4">
              <i>
                <img src="images/pent.png" alt="#" />
              </i>
              <br />
              <span className="fs-4 text-white">Pent & Socks</span>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#183661" }}
          >
            <div className="text-center my-4">
              <i>
                <img src="images/t_shart.png" alt="#" />
              </i>
              <br />
              <span className="fs-4 text-white">T-Shirt & TankStop</span>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#F2C119" }}
          >
            <div className="text-center my-4">
              <i>
                <img src="images/jakit.png" alt="#" />
              </i>
              <br />
              <span className="fs-4 text-white">Cardigans</span>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-2"
            style={{ backgroundColor: "#183661" }}
          >
            <div className="text-center my-4">
              <i>
                <img src="images/helbet.png" alt="#" />
              </i>
              <br />
              <span className=" fs-4 text-white">Top & Hat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
