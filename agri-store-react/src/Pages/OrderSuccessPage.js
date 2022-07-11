import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";

import OrderConfirm from "../Components/OrderConfirm/OrderConfirm";
function OrderSuccessPage() {
  return (
    <div>
      <Header />
      <OrderConfirm />
      <Footer />
    </div>
  );
}

export default OrderSuccessPage;
