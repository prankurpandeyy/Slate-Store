import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
export const ProductListingPagecontext = createContext();

function ProductListingPage({ children }) {
  const [productdata, setProductData] = useState([]);

  async function getProdcutsData() {
    try {
      await axios({
        method: "GET",
        url: `/api/products`,
      }).then((response) => setProductData(response.data.products));
    } catch (erorr) {
      console.log(`Server is encountering some issues:`, erorr);
    }
  }

  useEffect(() => {
    console.log(`inside set time out `, setTimeout(getProdcutsData(), 5000));
  }, []);

  // console.log(`this is card :`, productdata);

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
