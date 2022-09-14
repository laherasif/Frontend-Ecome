import React from "react";
import Alert from "../../component/alert/Alert";
import Header from "../../component/commonheader/Header";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";
import News from "../../component/news/News";

export default function NewsPage() {
  return (
    <div>
      <Alert />
      <Logo />
      <Nav />
      <Header text="News" />
      <News />
      <Info />
    </div>
  );
}
