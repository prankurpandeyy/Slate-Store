import React from "react";
import Spinner from "../Components/DataLoaderSpinner/Spinner";
import { FeaturedBrands } from "../Components/FeaturerdBrands/FeaturedBrands";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedBrands />
      <Footer />
    </div>
  );
}

export default Homepage;
