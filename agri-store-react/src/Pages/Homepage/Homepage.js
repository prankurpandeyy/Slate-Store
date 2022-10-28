import React from "react";

import {
  Footer,
  Header,
  Hero,
  FeaturedBrands,
  Spinner,
} from "../../Components/AllComponentIndex";
import { useProductDataContext } from "../../Context/ProductListingPageContext";

function Homepage() {
  const { isLoading } = useProductDataContext();
  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-12">
          <Hero />
          <FeaturedBrands />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Homepage;
