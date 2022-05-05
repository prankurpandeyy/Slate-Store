import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductListingPagecontext } from "../Context/ContextProductListingPage";
import "./Header.css";

function Header() {
  const { cart } = useContext(ProductListingPagecontext);
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Agri UI</div>
          </Link>
        </div>
        <Link to="/LoginPage">
          <button class="btn btn-warning">Login</button>
        </Link>
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
            <span class="material-icons navigationmi"> favorite</span>
            <span class="nav__number-badge">5</span>
          </div>
          <div class="navbadge">
            <Link to="/CartPage">
              <span class="material-icons navigationmi"> shopping_cart </span>
            </Link>
            <span class="nav__number-badge">{cart.length}</span>
          </div>
          <span class="material-icons navigationmi"> account_circle</span>
        </div>
      </nav>
    </div>
  );
}

export { Header };
