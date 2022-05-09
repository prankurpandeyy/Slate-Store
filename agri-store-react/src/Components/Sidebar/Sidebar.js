import React, { useContext } from "react";
import { filterContext } from "../CatagoriesFilter";

import { CartAndWishlistContext } from "../Context/CartAndWishlistPageContext";
import ProductCard from "../ProductCard/ProductCard";
import Rating from "../Rating";
import "./Sidebar.css";

function Sidebar() {
  const { rate, setRate } = useContext(CartAndWishlistContext);
  const {
    sort,
    setSort,
    stock,
    setStock,
    rating,
    setRating,
    priceRange,
    setPriceRange,
    category,
    setCategory,
  } = useContext(filterContext);

  function clearState() {
    setCategory("");
    setPriceRange("");
    setRate("");
    setSort("");
    setStock("");
    setRating("");
  }
  return (
    <div>
      <div className="catagory-items-page">
        <nav className="side-item-container">
          <button className="btn btn-warning" onClick={() => clearState()}>
            Clear All{" "}
          </button>
          <hr />
          <h3 className="Price-sort-by">Sort by Price : </h3>
          <input type="radio" name="high" onChange={() => setSort(false)} />
          High to Low <br />
          <input type="radio" name="high" onChange={() => setSort(true)} />
          Low to High <br />
          <hr />
          <div className="price-range">
            <h3 className="Price-sort-by">Sort by Price : </h3>
            {/* {105}
            <input
              type="range"
              max="120"
              min="105"
              onChange={(e) => setPriceRange(e.target.value)}
            />{" "}
            {priceRange} */}
          </div>
          <hr />
          <div className="price-range">
            Sort by Rating : <br />
            {/* <Rating
              rating={rate}
              onClick={(i) => setRate(i + 1)}
              onChange={(e) =>
                setRating({ ...rating, rating: e.target.checked })
              }
            /> */}
            <input
              type="checkbox"
              name="rating"
              value="1"
              rating={rate}
              onChange={(e) => setRating({ ...rating, one: e.target.checked })}
            />{" "}
            1-Star <br />
            <input
              type="checkbox"
              name="rating"
              value="2"
              onChange={(e) => setRating({ ...rating, two: e.target.checked })}
            />
            2-Star <br />
            <input
              type="checkbox"
              name="rating"
              value="3"
              onChange={(e) =>
                setRating({ ...rating, three: e.target.checked })
              }
            />
            3-Star <br />
            <input
              type="checkbox"
              name="4"
              value="4"
              onChange={(e) => setRating({ ...rating, four: e.target.checked })}
            />
            4-Star <br />
            <input
              type="checkbox"
              name="rating"
              value="5"
              onChange={(e) => setRating({ ...rating, five: e.target.checked })}
            />
            5-Star <br />
          </div>
          <hr />
          <h3 className="catagories-sort-by">Catagories sort by : </h3>
          <input
            type="checkbox"
            name="women"
            value="women"
            onChange={(e) =>
              setCategory({ ...category, women: e.target.checked })
            }
          />
          women <br />
          <input
            type="checkbox"
            name="men"
            value="men"
            onChange={(e) =>
              setCategory({ ...category, men: e.target.checked })
            }
          />
          men <br />
          <input
            type="checkbox"
            name="baby"
            value="baby"
            onChange={(e) =>
              setCategory({ ...category, baby: e.target.checked })
            }
          />
          baby <br />
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <input type="checkbox" onChange={(e) => setStock(e.target.checked)} />
          Exclude Out of Stock <br />
          <hr />
        </nav>
      </div>
    </div>
  );
}

export { Sidebar };
