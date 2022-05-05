import React, { useContext } from "react";
import { ProductListingPagecontext } from "../Components/Context/ContextProductListingPage";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import Spinner from "../Components/LoadingSpinner/Spinner";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import "./ProductlistingPage.css";

function ProductlistingPage() {
  const { productdata, isLoading } = useContext(ProductListingPagecontext);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="productlisting-cards">
        {isLoading ? (
          <Spinner />
        ) : (
          productdata.map((productCardData) => {
            return (
              <ProductCard
                productCardData={productCardData}
                key={productCardData._id}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductlistingPage;
