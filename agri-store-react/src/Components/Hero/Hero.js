import "./Hero.css";
import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";

function Hero() {
  return (
    <div>
      <main class="main-container">
        <img
          src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/home-img.png"
          alt="hero"
          className="hero-image"
        />
        <div class="text-in-image">
          <span class="head-text">Everything's better with Cars. </span>

          <div class="logo-text">Summer Sale 2022</div>

          <div class="btn btn-outline">
            <Link to="/ProductListingPage">
              <button class="btn btn-primary-outline">Shop Now</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Hero };
