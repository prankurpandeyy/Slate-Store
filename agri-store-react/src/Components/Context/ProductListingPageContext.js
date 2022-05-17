import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const productDataContext = createContext();
export const useProductDataContext = () => useContext(productDataContext);

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
    setisLoading(true);
    getProdcutsData();
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
// naming convetons on classed in csss
