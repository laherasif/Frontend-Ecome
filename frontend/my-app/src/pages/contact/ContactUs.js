import React from "react";
import Alert from "../../component/alert/Alert";
import Header from "../../component/commonheader/Header";
import Form from "../../component/form/Form";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";

export default function ContactUs() {
  return (
    <div>
      <Alert />
      <Logo />
      <Nav />
      <Header text="Contact Us" />
      <Form />
      <Info />
    </div>
  );
}
