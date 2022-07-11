import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  useCartContext,
  useFilterContext,
  useLoginContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import "./Header.css";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { logoutHandler } = useLoginContext();
  const { state, dispatch } = useFilterContext();
  const { search } = state;

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <nav class="navigation-menu">
        {/* <Link to="/"> */}
        <div class="navigation__left">
          <p class="navigation__logo">Slate Store</p>
        </div>
        {/* </Link> */}

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
              <span
                class="material-icons navigationmi"
                // onClick={logoutHandler}
              >
                {" "}
                account_circle{" "}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export { Header };
