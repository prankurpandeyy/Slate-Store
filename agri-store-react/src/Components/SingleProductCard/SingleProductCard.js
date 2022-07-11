import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../Context/AllContextIndex";
import { Rating } from "../../Components/AllComponentIndex";
import "./SingleProductCard.css";
import { addToCart, removeFromCart } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";
function SingleProductCard() {
  // const { _id, image, title, price, rating, inStock } = productCardData;
  const { wish } = useWishlistContext();
  const { dispatch } = useProductContext();
  const { cart } = useCartContext();
  const [singleProduct, setSingleProduct] = useState([]);

  const productId = useParams();

  // function to get the product  data from the product id
  function getProductById(productId) {
    axios
      .get(`/api/products/${productId}`)
      .then((res) => {
        setSingleProduct(res.data.product);
      })
      .catch((err) => {
        console.log(" err", err);
      });
  }

  useEffect(() => {
    toast.success(" Fetching single card data.");
    getProductById(productId.id);
  }, [productId]);

  return (
    <div>
      <div className="single-product-card">
        <div className="product-image">
          <img
            src={singleProduct.image && singleProduct.image}
            alt="demo"
            className="single-product-image"
          />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2> {singleProduct.title && singleProduct.title} </h2>
          </div>
          <div className="product-description">
            <p>
              Description :{" "}
              {singleProduct.description && singleProduct.description}
            </p>
            <div className="techincal-details">
              <p>
                Fuel Type :{" "}
                {singleProduct.categoryName && singleProduct.categoryName}
              </p>
              <p> Price : {singleProduct.price && singleProduct.price}</p>
              <p>
                {" "}
                ManufacturedBy :{" "}
                {singleProduct.manufacturedBy && singleProduct.manufacturedBy}
              </p>
              Rating :{" "}
              <Rating rating={singleProduct.rating && singleProduct.rating} />
              Stock :
              {singleProduct.inStock ? (
                <div style={{ fontSize: "1.5rem", color: "black" }}>
                  In Stock
                </div>
              ) : (
                <div style={{ fontSize: "1.5rem", color: "black" }}>
                  Out of Stock
                </div>
              )}
            </div>
            <div className="product-action-button">
              {cart.some((prod) => prod._id === singleProduct._id) ? (
                <button
                  class="btn  btn-primary icon1"
                  onClick={(_id) => removeFromCart(singleProduct._id, dispatch)}
                >
                  {" "}
                  REMOVE FROM CART
                  <span class="material-icons buttonmi">
                    remove_shopping_cart{" "}
                  </span>
                </button>
              ) : (
                <button
                  class="btn btn-primary icon1"
                  onClick={() => addToCart(singleProduct, dispatch)}
                >
                  ADD TO CART
                  <span class="material-icons buttonmi"> shopping_cart</span>
                </button>
              )}
              {wish.some((wishlist) => wishlist._id === singleProduct._id) ? (
                <button
                  class="btn btn-primary icon1"
                  onClick={(_id) => deleteWishList(singleProduct._id, dispatch)}
                >
                  REMOVE FROM WISHLIST
                  <span class="material-icons buttonmi"> favorite_border </span>
                </button>
              ) : (
                <button
                  class="btn btn-primary icon1"
                  onClick={() => addToWishlist(singleProduct, dispatch)}
                >
                  ADD TO WISHLIST
                  <span class="material-icons buttonmi"> favorite_border </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
