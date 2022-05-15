import React, { createContext, useContext, useReducer } from "react";

export const ProductContext = createContext();

const intialState = {
  cart: [],
  wish: [],
};

function productReducer(productstate, action) {
  switch (action) {
    case "CART":
      return { ...productstate, cart: action.payload };
    case "WISH":
      return { ...productstate, wish: action.payload };
    default:
      return productstate;
  }
}

function ProductContextReducer({ children }) {
  const [productstate, dispatch] = useReducer(productReducer, intialState);

  return (
    <ProductContext.Provider value={{ productstate, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContextReducer };
