import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const productDataContext = createContext();

function ProductListingPageContext({ children }) {
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
  // API Call
  useEffect(() => {
    setTimeout(() => {
      getProdcutsData();
    }, 3000);
  }, []);

  console.log(`this is product data`, productdata);
  return (
    <div>
      <productDataContext.Provider
        value={{ productdata, setProductData, isLoading }}
      >
        {children}
      </productDataContext.Provider>
    </div>
  );
}

export default ProductListingPageContext;
