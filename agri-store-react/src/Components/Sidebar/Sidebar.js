import React, { useContext, useState } from "react";
import { filterContext } from "../CatagoriesFilter";
import { useFilterContext } from "../Context/FilterContextReducer";
import Rating from "../Rating";
import "./Sidebar.css";

function Sidebar() {
  const { rate, setRate } = useState();
  const { state, dispatch } = useFilterContext();
  const { rating } = state;

  function clearState() {
    dispatch({ type: "SORT", payload: true });
    dispatch({ type: "SLIDER", payload: 106 });
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
          <input
            type="radio"
            name="high"
            onChange={() => dispatch({ type: "SORT", payload: false })}
          />
          High to Low <br />
          <input
            type="radio"
            name="high"
            onChange={() => dispatch({ type: "SORT", payload: true })}
          />
          Low to High <br />
          <hr />
          <div className="price-range">
            <h3 className="Price-sort-by">Sort by Price : </h3>
            {105}
            <br />
            <input
              type="range"
              max="120"
              min="106"
              onChange={(e) =>
                dispatch({ type: "SLIDER", payload: e.target.value })
              }
            />
            {120}
          </div>
          <hr />
          <div className="price-range">
            Sort by Rating :(Above than) <br />
            {/* <Rating
              rating={rate}
              onClick={(i) => setRate(i + 1)}
              onChange={() => dispatch({ type: "RATING", payload: 1 })}
            /> */}
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={() => dispatch({ type: "RATING", payload: 1 })}
            />{" "}
            1-Star <br />
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={() => dispatch({ type: "RATING", payload: 2 })}
            />
            2-Star <br />
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={() => dispatch({ type: "RATING", payload: 3 })}
            />
            3-Star <br />
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={() => dispatch({ type: "RATING", payload: 4 })}
            />
            4-Star <br />
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={() => dispatch({ type: "RATING", payload: 5 })}
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
              dispatch({
                type: "women",
              })
            }
          />
          women <br />
          <input
            type="checkbox"
            name="men"
            value="men"
            onChange={() =>
              dispatch({
                type: "men",
              })
            }
          />
          men <br />
          <input
            type="checkbox"
            name="baby"
            value="baby"
            onChange={() => dispatch({ type: "baby" })}
          />
          baby <br />
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <input
            type="checkbox"
            onChange={(e) =>
              dispatch({ type: "STOCK", payload: e.target.checked })
            }
          />
          Exclude Out of Stock <br />
          <hr />
        </nav>
      </div>
    </div>
  );
}

export { Sidebar };
