import React from "react";

export default function Hero() {
  return (
    <div>
      <section
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div style={{ textAlign: "left" }}>
                <h1
                  style={{
                    color: "#f2c119",
                    fontSize: "116px",
                    lineHeight: "120px",
                    paddingBottom: "50px",
                    fontWeight: "400",
                  }}
                >
                  <span
                    style={{
                      color: "#183661",
                      fontFamily: "'Righteous', cursive",
                      fontSize: "85px",
                    }}
                  >
                    Romofyi
                  </span>
                  <br />
                  Trends 2022
                </h1>
                <p
                  className="fs-1"
                  style={{
                    color: "#2a2a2c",
                    lineHeight: "30px",
                    fontSize: "33px",
                    marginBottom: "50px",
                  }}
                >
                  A huge fashion collection for ever{" "}
                </p>
                <a
                  className="btn btn-info text-decoration-none w-25 rounded-5"
                  href="#"
                >
                  Shop now
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ marginRight: "-45px" }}>
                <figure className="m-0">
                  <img src="images/ban_img.png" className="w-100" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
