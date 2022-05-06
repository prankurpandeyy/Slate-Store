import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
export const ProductListingPagecontext = createContext();

function ProductListingPage({ children }) {
  const [productdata, setProductData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  localStorage.setItem(
    "token",
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM`
  );
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

  const addToCart = async (productdata, setCart) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    console.log(response.data.cart);
    setCart(response.data.cart);
  };

  async function deleteQty(_id) {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: setCart },
    });
    setCart(response.data.cart);
  }

  const deleteWishList = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: setWish },
    });
    console.log(response.data.wishlist);
    setWish(response.data.wishlist);
  };

  async function updateQty(actionType, _id) {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        action: {
          type: actionType,
        },
      },
    });
    setCart(response.data.cart);
  }
  const addToWishlist = async (productdata, setWish) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/wishlist`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    console.log(response.data.wishlist);
    setWish(response.data.wishlist);
  };

  useEffect(() => {
    setTimeout(() => {
      getProdcutsData();
    }, 3000);
  }, []);

  return (
    <div>
      <ProductListingPagecontext.Provider
        value={{
          productdata,
          setProductData,
          isLoading,
          deleteWishList,
          addToWishlist,
          addToCart,
          cart,
          setCart,
          wish,
          setWish,
          updateQty,
          deleteQty,
        }}
      >
        {children}
      </ProductListingPagecontext.Provider>
    </div>
  );
}

export { ProductListingPage };
