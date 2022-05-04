import React, { useContext } from "react";
import { ProductListingPagecontext } from "../Context/ContextProductListingPage";
import "./ProductCard.css";
function ProductCard() {
  const { productdata } = useContext(ProductListingPagecontext);

  return (
    <div className="productscard-in-productpage">
      {productdata.map((pdata) => {
        return (
          <div class="horizontal-card">
            <img
              class="horizontal-card__image"
              src={pdata.image}
              alt="image_ecom"
            />
            <div class="horizontal-card__content">
              <h2 class="horizontal-card__title">{pdata.title}</h2>
              <h3 class="horizontal-card__price">Price : ${pdata.price}</h3>
              <p class="horizontal-card__description"></p>
              <h3 class="horizontal-card__ratings">Rating: {pdata.rating}</h3>
              <h4 class="horizontal-card__stock">
                Stock :{pdata.inStock ? `inStock` : ` out of stock`}
              </h4>
            </div>
            <div class="horizontal-card__action-button">
              <div class="horizontal-card__add-to-cart">
                <button class="btn btn-success icon">
                  Cart
                  <span class="material-icons buttonmi"> shopping_cart </span>
                </button>
              </div>
              <div class="horizontal-card__add-to-wishlist">
                <button class="btn btn-danger icon">
                  Wishlist
                  <span class="material-icons buttonmi"> favorite_border </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
