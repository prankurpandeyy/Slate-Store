import { React, Link } from "../../Utils/CustomUtils";
import {
  useCartContext,
  useFilterContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { dispatch } = useFilterContext();

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <div class=" flex flex-row items-center justify-between   w-full p-2 sm:px-4 shadow-xl shadow-xs bg-gray-700 fixed-top top">
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
        <div class="flex  text-white text-2xl ">
          <div class="flex w-48 justify-between ">
            <Link to="/ProductListingPage">
              <span class="material-icons "> store </span>
            </Link>

            <div class="">
              <Link to="/WishlistPage">
                <span class="material-icons "> favorite</span>
              </Link>
              <span class="w-4 h-4 rounded-full text-center absolute leading text-xs bg-red-500">
                {wish.length}
              </span>
            </div>
            <div class="navbadge">
              <Link to="/CartPage">
                <span class="material-icons"> shopping_cart </span>
              </Link>
              <span class="w-4 h-4 rounded-full text-center absolute leading text-xs bg-red-500">
                {cart.length}
              </span>
            </div>

            {!token ? (
              <Link to="/LoginPage">
                <span class="material-icons "> login </span>
              </Link>
            ) : (
              <Link to="/Accountpage">
                <span class="material-icons "> account_circle </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
