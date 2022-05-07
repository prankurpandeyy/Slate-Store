import React from "react";
import "./ProductCard.css";
function ProductCard({ productCardData }) {
  const { _id, image, title, price, rating, inStock } = productCardData;
  console.log(`this is product card data`, productCardData);

  return (
    <div class="horizontal-card" key={_id}>
      <img class="horizontal-card__image" src={image} alt="image_ecom" />
      <div class="horizontal-card__content">
        <h2 class="horizontal-card__title">{title}</h2>
        <h3 class="horizontal-card__price">Price : ${price}</h3>
        <p class="horizontal-card__description"></p>
        <h3 class="horizontal-card__ratings">Rating: {rating}</h3>
        <h4 class="horizontal-card__stock">
          Stock :{inStock ? `inStock` : ` out of stock`}
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
}

export default ProductCard;
