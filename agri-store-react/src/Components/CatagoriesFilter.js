import React, { createContext, useState } from "react";
import { useFilterContext } from "./Context/FilterContextReducer";
import { useProductDataContext } from "./Context/ProductListingPageContext";

export const filterContext = createContext();

function CatagoriesFilter({ children }) {
  const { state, dispatch } = useFilterContext();
  const { sort, slider, category, rating, stock } = state;
  const { men, women, baby } = category;

  const { productdata } = useProductDataContext();

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
    sortedproductdata.filter((f) => f.rating === console.log(rating));

    // if (rating === 1) {
    //   return sortedproductdata.filter((product) => product.rating === 1);
    // }
    // if (rating === 2) {
    //   return sortedproductdata.filter((product) => product.rating === 2);
    // }
    // if (rating === 3) {
    //   return sortedproductdata.filter((product) => product.rating === 3);
    // }
    // if (rating === 4) {
    //   return sortedproductdata.filter((product) => product.rating === 4);
    // }
    // if (rating === 5) {
    //   return sortedproductdata.filter((product) => product.rating === 5);
    // }
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
  // function chaining
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
          rating,
          stock,
          slider,
          category,
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
