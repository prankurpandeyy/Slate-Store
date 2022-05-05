import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
export const ProductListingPagecontext = createContext();

function ProductListingPage({ children }) {
  const [productdata, setProductData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function getProdcutsData() {
    setisLoading(true);
    try {
      await axios({
        method: "GET",
        url: `/api/products`,
      }).then((response) => setProductData(response.data.products));
      setisLoading(false);
    } catch (erorr) {
      console.log(`Server is encountering some issues:`, erorr);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getProdcutsData();
    }, 3000);
  }, []);

  return (
    <div>
      <ProductListingPagecontext.Provider
        value={{ productdata, setProductData, isLoading }}
      >
        {children}
      </ProductListingPagecontext.Provider>
    </div>
  );
}

export { ProductListingPage };
