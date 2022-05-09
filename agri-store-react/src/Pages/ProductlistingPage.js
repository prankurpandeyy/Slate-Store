import React, { useContext } from "react";
import { filterContext } from "../Components/CatagoriesFilter";
import { CartAndWishlistContext } from "../Components/Context/CartAndWishlistPageContext";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import Spinner from "../Components/LoadingSpinner/Spinner";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import "./ProductlistingPage.css";

function ProductlistingPage() {
  const { isLoading } = useContext(CartAndWishlistContext);
  const { finalCategoryData } = useContext(filterContext);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="productlisting-cards">
        {isLoading ? (
          <Spinner />
        ) : (
          finalCategoryData.map((productCardData) => {
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
