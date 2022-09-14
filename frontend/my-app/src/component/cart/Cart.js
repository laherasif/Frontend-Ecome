import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Alert from "../alert/Alert";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Header from "../commonheader/Header";
import axios from "axios";
export default function Cart() {
  const [clear, setClear] = useState(false);
  const [carts, setCarts] = useState("");
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    mobile: '',
    postcode: ''
  })


   const handleChange = (e) => {
    const { name  , value} = e.target
    setUserData((prev) =>({
      ...prev,
      [name] : value 
    }))
   }


  useEffect(() => {
    let fetch = () => {
      let localData = JSON.parse(localStorage.getItem("carts"));
      setCarts(localData);
    };
    fetch();
  }, []);

  console.log("Data", carts);

  // let subtotal = carts?.reduce((total, product) => total + product.Quantity, 0);

  let subtotalPrice =
    carts && carts.length > 0
      ? carts
        .reduce(
          (total, product) => total + parseInt(product.product_price, 10) * product.Quantity,
          0
        )
        .toFixed(2)
      : null;


  console.log("price", subtotalPrice)

  const CheckOut = async () => {
    try {


      let data = {
        fname: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        zipcode: userData.zipcode,
        address: userData.address,
        amount: subtotalPrice,

      }
      console.log("Dayta" , data )

      let res = await axios.post(
        `http://localhost:5000/api/checkout/Payment`,
        data
      );
      if (res === false) {
      } else {
        // setMessage(res.data.message)
        setTimeout(() => {
          localStorage.clear();
          setClear(true)
        }, 2000);

      }
    } catch (error) { }



  };





  return (
    <div>
      {clear && <Navigate to='/product' />}
      <Alert />
      <Logo />
      <Nav />
      <Header text="Cart or CheckOut" />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            You have {carts?.length} items in your cart
                          </p>
                        </div>
                        {/* <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div> */}
                      </div>
                      {carts && carts.length > 0
                        ? carts.map((item, index) => (
                          <div className="card mb-3" key={index}>
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={`http://localhost:5000/uploads/${item.media}`}
                                      className="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: 65 }}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h5>{item?.ProductName}</h5>
                                    <p className="small mb-0">
                                      {item?.Description}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: 50 }}>
                                    <h5 className="fw-normal mb-0">
                                      {item?.Quantity}
                                    </h5>
                                  </div>
                                  <div style={{ width: 80 }}>
                                    <h5 className="mb-0">${item?.price}</h5>
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}>
                                    <i className="fas fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                        : null}
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-info text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Customer Detail</h5>
                            {/* <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid rounded-3"
                              style={{ width: 45 }}
                              alt="Avatar"
                            /> */}
                          </div>
                          {/* <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x" />
                          </a> */}
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Customer Name"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Customer Name
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="email"
                                id="typeEmail"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Customer Email"
                              />
                              <label className="form-label" htmlFor="typeEmail">
                                Customer Email
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                name="address"
                                value={userData.address}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                                placeholder="Customer Address"
                              />
                              <label className="form-label" htmlFor="typeText">
                                Customer Address
                              </label>
                            </div>
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white mb-4">
                                  <input
                                    type="text"
                                    name="mobile"
                                    value={userData.mobile}
                                    onChange={handleChange}
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="Mobile Number"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeText"
                                  >
                                    Mobile Number
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeText"
                                    name="zipcode"
                                    value={userData.zipcode}
                                    onChange={handleChange}
                                    className="form-control form-control-lg"
                                    placeholder="Postal Code"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeText"
                                  >
                                    Postal Code
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">Free</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${subtotalPrice}</p>
                          </div>
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg"
                            onClick={() => CheckOut()}
                          >
                            <div className="d-flex justify-content-between">
                              <span>${subtotalPrice}</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2" />
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
