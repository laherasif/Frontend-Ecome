import React from "react";
import Alert from "../../component/alert/Alert";
import Header from "../../component/commonheader/Header";
import Fashion from "../../component/fashion/Fashion";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";

export default function FashionPage() {
  return (
    <div>
      <Alert />
      <Logo />
      <Nav />
      <Header text="Fashions" />
      <Fashion />
      <Info />
    </div>
  );
}
