import React from "react";
import "./FeaturedBrands.css";

function FeaturedBrands() {
  return (
    <div>
      <section class="icons-container">
        <div class="icons">
          <span class="material-icons fbmi">check_circle</span>
          <div class="content">
            <h3>150+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">local_shipping</span>
          <div class="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">groups</span>
          <div class="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">directions_car</span>
          <div class="content">
            <h3>1500+</h3>
            <p>news cars</p>
          </div>
        </div>
      </section>

      <div class="featured-products">
        <div class="featured-catagories">
          <div class="h1"> Catagories</div>
        </div>

        <div class="catagory-choice">
          <div class="first-catagory box">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-3.png"
              alt="car"
            />
            Petrol ⛽️
          </div>
          <div class="second-catagory box">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-2.png"
              alt="car"
            />
            Diesel ⛽️
          </div>

          <div class="fourth-catagory box">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-5.png"
              alt="car"
            />
            EV ⚡️
          </div>
        </div>

        <div class="featured-brands">
          <div class="h1">Featured Cars</div>
        </div>
        <div class="brand-choice">
          <div class="first-brand brand-logo">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-3.png"
              alt="car1"
            />
            <div> Price : 500K Rating : 5</div>
            <button className="btn btn-success">Buy</button>
          </div>
          <div class="second-brand brand-logo">
            {" "}
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-8.png"
              alt="car1"
            />
            <div> Price : 500K Rating : 5</div>
            <button className="btn btn-success">Buy</button>
          </div>
          <div class="third-brand brand-logo">
            {" "}
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-7.png"
              alt="car1"
            />
            <div> Price : 500K Rating : 5</div>
            <button className="btn btn-success">Buy</button>
          </div>
          <div class="fourth-brand brand-logo">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-8.png"
              alt="car1"
            />
            <div> Price : 500K Rating : 5</div>
            <button className="btn btn-success">Buy</button>
          </div>
          <div class="fifth-brand brand-logo">
            <img
              src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-6.png"
              alt="car1"
            />
            <div> Price : 500K Rating : 5</div>
            <button className="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeaturedBrands };
