import React from "react";
import Checkout from "../Components/Checkout/Checkout";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import "./Checkoutpage.css";
function Checkoutpage() {
  return (
    <div>
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}

export default Checkoutpage;
