import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import CatagoriesFilter from "./Components/CatagoriesFilter";
import CartPageContext from "./Components/Context/CartPageContext";
import ProductListingPageContext from "./Components/Context/ProductListingPageContext";
import WishlistPageContext from "./Components/Context/WishlistPageContext";
import { ProductContextReducer } from "./Components/Context/ProductContextReducer";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextReducer>
        <CartPageContext>
          <ProductListingPageContext>
            <WishlistPageContext>
              <CatagoriesFilter>
                <App />
              </CatagoriesFilter>
            </WishlistPageContext>
          </ProductListingPageContext>
        </CartPageContext>
      </ProductContextReducer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
