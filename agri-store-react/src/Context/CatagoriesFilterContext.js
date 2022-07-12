import { React, createContext, useContext } from "../Utils/CustomUtils";
import { useFilterContext } from "./FilterContext";
import { useProductDataContext } from "../Context/ProductListingPageContext";

const catagoriesFilterContext = createContext();
export const useCatagoriesFilterContext = () =>
  useContext(catagoriesFilterContext);

function CatagoriesFilter({ children }) {
  const { state } = useFilterContext();
  const { sort, slider, category, rating, stock, search } = state;
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
    if (rating) {
      return sortedproductdata.filter((f) => f.rating === rating);
    }
    return sortedproductdata;
  };

  //sort by category
  const categoryFunction = (productdata, category) => {
    const sortedproductdata = [...productdata];
    if (category.petrol && category.diesel && category.ev) {
      return sortedproductdata;
    }
    if (category.petrol && category.diesel) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "ev"
      );
    }
    if (category.ev && category.petrol) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "diesel"
      );
    }
    if (category.ev && category.diesel) {
      return sortedproductdata.filter(
        (product) => product.categoryName !== "petrol"
      );
    }
    if (category.diesel) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "diesel"
      );
    }
    if (category.petrol) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "petrol"
      );
    }
    if (category.ev) {
      return sortedproductdata.filter(
        (product) => product.categoryName === "ev"
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

  // searchbar

  function searchData(productdata, search) {
    const sortedproductdata = [...productdata];
    if (search) {
      return sortedproductdata.filter((s) =>
        s.title.toLowerCase().includes(search)
      );
    } else {
      return sortedproductdata;
    }
  }

  // function chaining (working)
  const sortedData = sortFunction(productdata, sort);
  const finalData = ratingFunction(sortedData, rating);
  const stockData = stockFunction(finalData, stock);
  const finalCategoryData = categoryFunction(stockData, category);
  const sliderData = sliderFunction(finalCategoryData, slider);
  const searchbarData = searchData(sliderData, search);

  return (
    <div>
      <catagoriesFilterContext.Provider
        value={{
          sort,
          rating,
          stock,
          search,
          slider,
          category,
          searchbarData,
        }}
      >
        {children}
      </catagoriesFilterContext.Provider>
    </div>
  );
}

export default CatagoriesFilter;
