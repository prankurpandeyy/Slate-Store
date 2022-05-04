import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductListingPage } from "./Components/Context/ContextProductListingPage";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductListingPage>
        <App />
      </ProductListingPage>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
