import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PageStructure } from "./PageStructure";
import { Toaster } from "react-hot-toast";
import "./index.css";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageStructure />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
