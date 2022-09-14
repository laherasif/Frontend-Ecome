import React from "react";
import Alert from "../../component/alert/Alert";
import Fashion from "../../component/fashion/Fashion";
import Feature from "../../component/feature/Feature";
import Hero from "../../component/hero/Hero";
import Info from "../../component/info/Info";
import Logo from "../../component/logo/Logo";
import Nav from "../../component/nav/Nav";
import News from "../../component/news/News";
import SixBox from "../../component/sixbox/SixBox";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  // const spinner = document.getElementById("spinner");
  // if (spinner) {
  //   setTimeout(() => {
  //     spinner.style.display = "none";
  //     setLoading(false);
  //   }, 2000);
  // }

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    // !loading && (
    <div>
      <Alert />
      <Logo load={loading} />
      <Nav />
      <Hero />
      <SixBox />
      <Feature load={(value) => loadData(value)} />
      <Fashion />
      <News />
      <Info />
    </div>
    // )
  );
}
