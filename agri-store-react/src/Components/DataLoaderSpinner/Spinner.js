import React from "react";
import "./Spinner.css";
function Spinner() {
  return (
    <div>
      <h2> Data is being fetched : </h2>
      <div class="loader"></div>
    </div>
  );
}

export { Spinner };
