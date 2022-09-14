import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import ContactUs from "../contactUs/ContactUs";
import ShowOrder from "../showOrder/ShowOrder";

export default function Dashboard() {

     const [product , setproducts] =  useState([])
     const [checkout , setcheckouts] =  useState([])
     const [contact , setcontacts] =  useState([])

useEffect(() => {
  let fetch = async () => {
    let res = await axios.get("http://localhost:5000/api/product/getProduct")
    let resOder = await axios.get("http://localhost:5000/api/checkout/getCheckout")
    let resContact= await axios.get("http://localhost:5000/api/contact/getContact")
    console.log("REs" ,res )
    setproducts(res.data.data)
    setcheckouts(resOder.data.data)
    setcontacts(resContact.data.data)
  }
  fetch()
},[])



  return (
    <Layout>
      <div className="container overflow-hidden">
        <div className="breadcrumbs">
          <div className="col-sm-4">
            <div className="page-header float-left">
              <div className="page-title">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="page-header d-flex justify-content-end">
              <div className="page-title">
                <ol className="breadcrumb ">
                  <li className="active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* dashboard items */}
        <div className="row mt-3">
          <div className="col-sm-6 col-lg-4 ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">{product?.length}</span>
                </h4>
                <p className=" fs-4">Products</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">{checkout?.length}</span>
                </h4>
                <p className=" fs-4">Orders</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">{contact?.length}</span>
                </h4>
                <p className=" fs-4">Contact Us</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-6">
            <ShowOrder orders={checkout}/>
          </div>

          <div className="col-md-6">
            <ContactUs contact={contact} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
