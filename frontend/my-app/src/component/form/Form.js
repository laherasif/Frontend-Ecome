import axios from "axios";
import React, { useState } from "react";

export default function Form() {


  const initalState = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    desc: ''

  }

  const [userData, setUserData] = useState(initalState)
  const [message, setMessage] = useState('')


  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }))
  }






  const Contact = async (e) => {
    e.preventDefault()
    try {
      let data = {
        fname: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        address: userData.address,
        desc: userData.desc,

      }

      let res = await axios.post(
        `http://localhost:5000/api/contact/contact`,
        data
      );
      if (res === false) {
      } else {
        setMessage(res.data.message)
        setUserData(initalState)

      }
    } catch (error) { }



  };





  return (
    <div>
      {message && <div className="alert alert-success text-center">{message}</div>}
      <div id="contact" className="contact">
        <div className="con_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="mobile"
                        value={userData.mobile}
                        onChange={handleChange}

                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        value={userData.email}
                        onChange={handleChange}
                        name="email"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Address"
                        type="type"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactusmess"
                        placeholder="Message"
                        type="type"
                        Message="desc"
                        name="desc"
                        value={userData.desc}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <button onClick={(e) => Contact(e)} className="send_btn my-3">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
