import React, { useContext } from "react";
import { ProductListingPagecontext } from "../Context/ContextProductListingPage";
import "./ProductCard.css";

function ProductCard({ productCardData }) {
  const { _id, image, title, price, rating, inStock } = productCardData;
  const {
    addToWishlist,
    addToCart,
    cart,
    setCart,
    wish,
    deleteQty,
    setWish,
    deleteWishList,
  } = useContext(ProductListingPagecontext);

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
          {cart.some((prod) => prod._id === productCardData._id) ? (
            <button
              class="btn btn-success icon"
              onClick={(_id) => deleteQty(productCardData._id)}
            >
              <span class="material-icons buttonmi">
                {" "}
                remove_shopping_cart{" "}
              </span>
            </button>
          ) : (
            <button
              class="btn btn-success icon"
              onClick={() => addToCart(productCardData, setCart)}
            >
              <span class="material-icons buttonmi"> shopping_cart</span>
            </button>
          )}
        </div>

        {/* add to wishlist */}
        <div class="horizontal-card__add-to-wishlist">
          {wish.some((wishlist) => wishlist._id === productCardData._id) ? (
            <button
              class="btn btn-danger icon"
              onClick={(_id) => deleteWishList(productCardData._id)}
            >
              Remove
              <span class="material-icons buttonmi"> favorite_border </span>
            </button>
          ) : (
            <button
              class="btn btn-danger icon"
              onClick={() => addToWishlist(productCardData, setWish)}
            >
              Wishlist
              <span class="material-icons buttonmi"> favorite_border </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
