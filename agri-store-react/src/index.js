import React, { useContext } from "react";
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
      <CartPageContext>
        <ProductListingPageContext>
          <WishlistPageContext>
            <CatagoriesFilter>
              <ProductContextReducer>
                <App />
              </ProductContextReducer>
            </CatagoriesFilter>
          </WishlistPageContext>
        </ProductListingPageContext>
      </CartPageContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
