import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <main className="main-container">
        <div className="text-in-image">
          <span className="mtext">
            <div className="h1">Agri Store</div>
          </span>
          <span className="head-text"> by farmers ,to farmers !</span>
          <div className="logo-text">Summer Sale 2022</div>
          <div className="subtext-image">
            All in one Market Place for Farmers
          </div>
          <div className="btn btn-outline">
            <button className="btn btn-success-outline">Shop Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Hero };
