import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import SingleProductCard from "../Components/SingleProductCard/SingleProductCard";

function SingleProductPage() {
  return (
    <div>
      <Header />
      <SingleProductCard />
      <Footer />
    </div>
  );
}

export default SingleProductPage;
