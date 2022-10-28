import { useFilterContext } from "../../Context/AllContextIndex";
import { Rating } from "../../Components/AllComponentIndex";
// import "../../Utils/CustomCSSUtils.css";
import { clearState } from "../../Services/AddressServices";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { state, dispatch } = useFilterContext();
  const { rating, stock } = state;

  const clearStateHandler = (e, dispatch) => {
    clearState(e, dispatch);
  };

  return (
    <div>
      <div class="w-60 flex flex-col justify-start items-center h-screen shadow-md bg-white px-1  mt-12 left-0 fixed">
        <button
          onClick={(e) => clearStateHandler(e, dispatch)}
          class="flex mt-4 items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <svg
            class="w-5 h-5 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-1">Clear All</span>
        </button>
        <div>
          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="text-sm">Short By Price :</p>
          <div class="flex justify-center">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => dispatch({ type: "SORT", payload: false })}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  High to Low
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={() => dispatch({ type: "SORT", payload: true })}
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Low to High
                </label>
              </div>
            </div>
          </div>
          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div>
          <div class="relative pt-1">
            <p className="text-sm">Price Range :</p>
            <input
              type="range"
              max="120"
              min="106"
              onChange={(e) =>
                dispatch({ type: "SLIDER", payload: e.target.value })
              }
              class="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
              id="customRange1"
            />
          </div>

          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div className="text-left">
          <p className="text-sm">Short By Price Range :</p>
          <Rating
            rating={rating}
            onClick={(i) => dispatch({ type: "RATING", payload: i + 1 })}
            class="cursor-pointer"
          />
          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div>
          <p className="text-sm">Catagories Sort By :</p>
          <div class="flex justify-center">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="diesel"
                  onChange={() =>
                    dispatch({
                      type: "diesel",
                    })
                  }
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  Diesel
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  id="flexCheckDefault"
                  value="petrol"
                  onChange={() =>
                    dispatch({
                      type: "petrol",
                    })
                  }
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  Petrol{" "}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="ev"
                  onChange={() =>
                    dispatch({
                      type: "ev",
                    })
                  }
                  id="flexCheckChecked"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckChecked"
                >
                  EV
                </label>
              </div>
            </div>
          </div>
          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={stock}
              onChange={(e) =>
                dispatch({ type: "STOCK", payload: e.target.checked })
              }
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckChecked"
            >
              Exclude Out Of Stock
            </label>
          </div>
          <hr class="m-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
