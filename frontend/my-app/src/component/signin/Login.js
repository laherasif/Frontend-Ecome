import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(false)

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
      let res = await axios.post("http://localhost:5000/api/users/login", user);
      console.log("res", res);
      if (res === false) {
      } else {
        setLogin(true)
        localStorage.setItem('token', res.data.token)
      }
    } catch (error) { }
  };

  let { email, password } = user;

  return (
    <div
      className="body"
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

      {login && <Navigate to="/dashboard" />}
      <div className="overlay pt-5">
        <form
          className="login_form mx-auto"
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
          {/*   con = Container  for items in the form*/}
          <div
            className="con"
            style={{
              display: "flex",
              WebkitJustifyContent: "space-around",
              justifyContent: "space-around",
              WebkitFlexWrap: "wrap",
              flexWrap: "wrap",
              margin: " auto",
            }}
          >
            {/*     Start  header Content  */}
            <header
              className="head-form"
              style={{ margin: "2% auto 10% auto", textAlign: "center" }}
            >
              <h2
                style={{
                  fontSize: "250%",
                  fontFamily: "'Playfair Display', serif",
                  color: "#3e403f",
                }}
              >
                Log In
              </h2>
              {/*     A welcome message or an explanation of the login form */}
              <p style={{ letterSpacing: "0.05em" }}>
                login here using your username and password
              </p>
            </header>
            {/*     End  header Content  */}
            <br />
            <div className="field-set">
              {/*   user name */}
              <input
                className="form-input"
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
                id="txt-inputs"
                name="email"
                onChange={handleChange}
                value={email}
                type="text"
                placeholder="@UserName"
                required=""
              />
              <br />
              {/*   Password Input*/}
              <input
                className="form-input"
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
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="Password"
                id="pwd"
                required=""
              />
              <br />
              <button
                className="log-in"
                type="submit"
                onClick={(e) => handleSubmit(e)}
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
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
