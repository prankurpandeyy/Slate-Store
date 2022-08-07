import React from "react";
import {
  Footer,
  Header,
  OrderConfirm,
  Spinner,
} from "../../Components/AllComponentIndex";
import { useProductDataContext } from "../../Context/ProductListingPageContext";

function OrderSuccessPage() {
  const { isLoading } = useProductDataContext();
  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <OrderConfirm />}
      <Footer />
    </div>
  );
}

export default OrderSuccessPage;
