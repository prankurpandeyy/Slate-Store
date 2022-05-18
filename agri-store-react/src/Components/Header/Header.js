import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartPageContext";
import { useWishlistContext } from "../Context/WishlistPageContext";
import "./Header.css";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Agri UI</div>
          </Link>
        </div>

        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
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
          <Link to="/LoginPage">
            <button class="btn btn-warning">LogIn</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export { Header };
