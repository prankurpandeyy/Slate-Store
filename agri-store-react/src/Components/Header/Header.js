import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
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
            <span class="material-icons navigationmi"> shopping_cart </span>
            <span class="nav__number-badge">5</span>
          </div>
          <span class="material-icons navigationmi"> account_circle</span>
        </div>
      </nav>
    </div>
  );
}

export { Header };
