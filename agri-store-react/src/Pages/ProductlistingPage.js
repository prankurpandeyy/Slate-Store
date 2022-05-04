import React, { useContext } from "react";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import "./ProductlistingPage.css";
function ProductlistingPage() {
  return (
    <div>
      <Header />
      <div className="product-cards">
        <Sidebar />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
}

export default ProductlistingPage;
