import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
export const ProductListingPagecontext = createContext();

function ProductListingPage({ children }) {
  const [productdata, setProductData] = useState([]);

  async function getProdcutsData() {
    await axios({
      method: "GET",
      url: `/api/products`,
    }).then((response) => setProductData(response.data.products));
  }
  useEffect(() => {
    getProdcutsData();
  }, []);

  console.log(`this is card :`, productdata);
  return (
    <div>
      <ProductListingPagecontext.Provider
        value={{ productdata, setProductData }}
      >
        {children}
      </ProductListingPagecontext.Provider>
    </div>
  );
}

export { ProductListingPage };
