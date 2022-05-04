import React from "react";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="catagory-items-page">
        <nav className="side-item-container">
          <hr />
          <h3 className="Price-sort-by">Price sort by : </h3>
          <input type="radio" name="high" />
          High to Low <br />
          <input type="radio" name="high" />
          Low to High <br />
          <hr />
          <div className="price-range">
            Sort by Rating : <br />
            <input type="checkbox" name="rating" value="1" />
            1-Star <br />
            <input type="checkbox" name="rating" value="2" />
            2-Star <br />
            <input type="checkbox" name="rating" value="3" />
            3-Star <br />
            <input type="checkbox" name="4" value="4" />
            4-Star <br />
            <input type="checkbox" name="rating" value="5" />
            5-Star <br />
          </div>
          <hr />
          <h3 className="catagories-sort-by">Catagories sort by : </h3>
          <input type="checkbox" name="women" value="women" />
          women <br />
          <input type="checkbox" name="men" value="men" />
          men <br />
          <input type="checkbox" name="baby" value="baby" />
          baby <br />
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <input type="checkbox" />
          Exclude Out of Stock <br />
          <hr />
        </nav>
      </div>
    </div>
  );
}

export { Sidebar };
