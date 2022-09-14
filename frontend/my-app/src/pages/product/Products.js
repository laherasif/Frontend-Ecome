import React from "react";
import Alert from "../../component/alert/Alert";
import Header from "../../component/commonheader/Header";
import Feature from "../../component/feature/Feature";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";

export default function Products() {
  return (
    <div>
      <Alert />
      <Logo />
      <Nav />
      <Header text="Products" />
      <Feature />
      <Info />
    </div>
  );
}
