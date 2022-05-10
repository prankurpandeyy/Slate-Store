import React, { createContext, useContext, useEffect, useState } from "react";
import { CartAndWishlistContext } from "./Context/CartAndWishlistPageContext";
import { Sidebar } from "./Sidebar/Sidebar";
import ProductCard from "./ProductCard/ProductCard";
import Rating from "./Rating";
export const filterContext = createContext();

function CatagoriesFilter({ children }) {
  const [sort, setSort] = useState(true);
  const [slider, setSlider] = useState([]);
  const [rating, setRating] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [priceRange, setPriceRange] = useState(true);
  const [stock, setStock] = useState(false);
  const [category, setCategory] = useState({
    men: false,
    women: false,
    baby: false,
  });

  const { productdata } = useContext(CartAndWishlistContext);

  const sortFunction = (productdata, sort) => {
    const sortedproductdata = [...productdata];
    if (sort) {
      return sortedproductdata.sort((a, b) => a.price - b.price);
    } else {
      return sortedproductdata.sort((a, b) => b.price - a.price);
    }
  };

  // sort by product rating

  const ratingFunction = (productdata, rating) => {
    const sortedproductdata = [...productdata];
    if (rating.one) {
      return sortedproductdata.filter((product) => product.rating === 1);
    }

    if (rating.two) {
      return sortedproductdata.filter((product) => product.rating === 2);
    }
    if (rating.three) {
      return sortedproductdata.filter((product) => product.rating === 3);
    }
    if (rating.four) {
      return sortedproductdata.filter((product) => product.rating === 4);
    }
    if (rating.five) {
      return sortedproductdata.filter((product) => product.rating === 5);
    }
    return sortedproductdata;
  };

  //sort by category
  const categoryFunction = (productdata, category) => {
    const sortedproductdata = [...productdata];
    if (category.men && category.women && category.baby) {
      return sortedproductdata;
    }

    if (category.men && category.women) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "baby"
      );
    }
    if (category.baby && category.women) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "men"
      );
    }
    if (category.baby && category.men) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "women"
      );
    }
    if (category.men) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "men"
      );
    }
    if (category.women) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "women"
      );
    }
    if (category.baby) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "baby"
      );
    }
    return sortedproductdata;
  };

  // sort by stock availbility
  const stockFunction = (productdata, stock) => {
    const sortedproductdata = [...productdata];
    if (stock) {
      return sortedproductdata.filter((product) => product.inStock === stock);
    } else {
      return sortedproductdata;
    }
  };

  // slider function range slider
  function sliderFunction(productdata, slider) {
    const sortedproductdata = [...productdata];
    if (slider) {
      return sortedproductdata.filter((data1) => data1.price >= slider);
    } else {
      return sortedproductdata;
    }
  }
  // demo playing one
  const sortedData = sortFunction(productdata, sort);
  const finalData = ratingFunction(sortedData, rating);
  const stockData = stockFunction(finalData, stock);
  const finalCategoryData = categoryFunction(stockData, category);
  const sliderData = sliderFunction(finalCategoryData, slider);

  return (
    <div>
      <filterContext.Provider
        value={{
          sort,
          setSort,
          stock,
          setStock,
          rating,
          setRating,
          priceRange,
          setPriceRange,
          category,
          slider,
          setSlider,
          setCategory,
          finalCategoryData,
          sliderData,
        }}
      >
        {children}
      </filterContext.Provider>
    </div>
  );
}

export default CatagoriesFilter;
