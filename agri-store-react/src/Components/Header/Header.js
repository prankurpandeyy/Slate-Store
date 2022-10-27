import { React, Link } from "../../Utils/CustomUtils";
import {
  useCartContext,
  useFilterContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
// import "../../Utils/CustomCSSUtils.css";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { dispatch } = useFilterContext();

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <div class="w-full flex flex-row items-center p-2 justify-between bg-white shadow-xs bg-gray-700">
        <div class="ml-8 text-lg text-white hidden md:flex">Tail-kit</div>
        <span class="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="search"
            onChange={(e) =>
              dispatch({ type: "SEARCHBAR", payload: e.target.value })
            }
            name="serch"
            placeholder="Search"
            class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
        </span>
        <div class="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
          <button>
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="h-8 w-8"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center mr-8 hidden md:flex text-white">
          {!token ? (
            <Link to="/LoginPage">
              <button
                type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Valider
              </button>
            </Link>
          ) : (
            <Link to="/Accountpage">
              <span class="material-icons navigationmi"> account_circle </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  {
    /* <nav class="navigation-menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="navigation__left">
            <p class="navigation__logo">
              Slate Store
              <span class="material-icons navigationmi">time_to_leave</span>
            </p>
          </div>
        </Link>

        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
          onChange={(e) =>
            dispatch({ type: "SEARCHBAR", payload: e.target.value })
          }
        />

        <div class="navigation__right">
          <Link to="/ProductListingPage">
            <span class="material-icons navigationmi"> store </span>
          </Link>

          <div class="navbadge">
            <Link to="/WishlistPage">
              <span class="material-icons navigationmi"> favorite</span>
            </Link>
            <span class="nav__number-badge">{wish.length}</span>
          </div>
          <div class="navbadge">
            <Link to="/CartPage">
              <span class="material-icons navigationmi"> shopping_cart </span>
            </Link>
            <span class="nav__number-badge">{cart.length}</span>
          </div>

          {!token ? (
            <Link to="/LoginPage">
              <span class="material-icons navigationmi"> login </span>
            </Link>
          ) : (
            <Link to="/Accountpage">
              <span class="material-icons navigationmi"> account_circle </span>
            </Link>
          )}
        </div>
      </nav> */
  }
}

export { Header };
