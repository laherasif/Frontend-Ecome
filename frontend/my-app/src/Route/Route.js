import React, { useDebugValue, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Products";
import FashionPage from "../pages/fashions/FashionPage";
import NewsPage from "../pages/newspage/NewsPage";
import ContactUs from "../pages/contact/ContactUs";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import AddProduct from "../admin/pages/Product/AddProduct";
import ViewProduct from "../admin/pages/Product/ViewProduct";
import CreateUser from "../pages/createuser/CreateUser";
import SignIn from "../pages/login/SignIn";
import Cart from "../component/cart/Cart";

export default function PageRoute() {

  const [token, setToken] = useState('')

  useEffect(() => {
    let token = localStorage.getItem('token')
    setToken(token)
  }, [])


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/cart" element={<Cart />} />

        {token ? <Route path="/dashboard" element={<Dashboard />} /> : <Route to="/signin" element={<SignIn />} />}
        {token ? <Route path="/addproduct" element={<AddProduct />} /> : <Route to="/signin"element={<SignIn />} />}
        {token ? <Route path="/addproduct/:id" element={<AddProduct />} /> : <Route to="/signin"element={<SignIn />} />}
        {token ? <Route path="/viewproduct" element={<ViewProduct />} /> : <Route to="/signin" element={<SignIn />}/>}
      </Routes>
    </div>
  );
}
