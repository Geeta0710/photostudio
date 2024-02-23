"use client";
import Home from "./Home/page";
import Page2 from "./Home/Page2";
import Page3 from "./Home/page3";
import Nav from "./Home/nav";
import Prewedding from "./Home/page4";
import Footer from "./Footer/page";

export default function Page() {
  return (
    <>
      <Nav />
      <Home />
      <Page2 />
      <Page3 />
      <Prewedding />
      <Footer />
    </>
  );
}
