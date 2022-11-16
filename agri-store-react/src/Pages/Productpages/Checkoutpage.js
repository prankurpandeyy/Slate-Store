import React from "react";
import {
  Footer,
  Header,
  Checkout,
  Spinner,
} from "../../Components/AllComponentIndex";
import { useProductDataContext } from "../../Context/ProductListingPageContext";

import "./Checkoutpage.css";
function Checkoutpage() {
  const { isLoading } = useProductDataContext();
  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <Checkout />}
      <Footer />
    </div>
  );
}

export default Checkoutpage;
