import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import CatagoriesFilter from "./Components/CatagoriesFilter";
import { CartAndWishlistPage } from "./Components/Context/CartAndWishlistPageContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartAndWishlistPage>
        <CatagoriesFilter>
          <App />
        </CatagoriesFilter>
      </CartAndWishlistPage>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
