import React, { useState } from "react";
// import { Instance } from "../../util/axios";
import axios from "axios";
export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "http://localhost:5000/api/users/register",
        user
      );
      console.log("res", res);
    } catch (error) {}
  };

  let { name, email, password } = user;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)`,
        backgroundImage: `linear-gradient(to top, #a8edea 50%, #fed6e3 100%)`,
        backgroundAttachment: "relative",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        padding: "10",
        margin: "0",
        fontFamily: "'Vibur', cursive",
        fontFamily: "'Abel', sans-serif",
        opacity: 0.95,
      }}
    >
      <div className="pt-3">
        <form
          style={{
            width: "450px",
            minHeight: "500px",
            height: "auto",
            borderRadius: "5px",
            margin: "2% auto",
            boxShadow: "0 9px 50px hsla(20, 67%, 75%, 0.31)",
            padding: "2%",
            backgroundImage:
              "linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%)",
          }}
        >
          <div className="mb-3 ms-5  ">
            <p className="text-center fs-2">Sign Up Form</p>
            <div className="mb-3 ">
              <label for="full_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                className="form-control"
                id="full_name"
                style={{
                  width: "240px",
                  height: "50px",
                  marginTop: "2%",
                  padding: "15px",
                  fontSize: "16px",
                  fontFamily: "'Abel', sans-serif",
                  color: "#5E6472",
                  outline: "none",
                  border: "none",
                  borderRadius: "0px 5px 5px 0px",
                  transition: "0.2s linear",
                  width: "250px",
                  transform: "translateX(-2px)",
                  borderRadius: "5px",
                }}
              />
            </div>
            <label for="exampleInputEmail1" className="form-label mt-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              className="form-control"
              style={{
                width: "240px",
                height: "50px",
                marginTop: "2%",
                padding: "15px",
                fontSize: "16px",
                fontFamily: "'Abel', sans-serif",
                color: "#5E6472",
                outline: "none",
                border: "none",
                borderRadius: "0px 5px 5px 0px",
                transition: "0.2s linear",
                width: "250px",
                transform: "translateX(-2px)",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="mb-3 ms-5">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              className="form-control"
              style={{
                width: "240px",
                height: "50px",
                marginTop: "2%",
                padding: "15px",
                fontSize: "16px",
                fontFamily: "'Abel', sans-serif",
                color: "#5E6472",
                outline: "none",
                border: "none",
                borderRadius: "0px 5px 5px 0px",
                transition: "0.2s linear",
                width: "250px",
                transform: "translateX(-2px)",
                borderRadius: "5px",
              }}
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="ms-5"
            style={{
              display: "inline-block",
              color: "#252537",
              width: "250px",
              height: "50px",
              padding: "0 20px",
              background: "#fff",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.2s linear",
              margin: "7% auto",
              letterSpacing: "0.05em",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
