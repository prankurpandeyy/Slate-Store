import { React, Link, useNavigate } from "../../Utils/CustomUtils";
import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../Context/AllContextIndex";
import { addToCart, removeFromCart } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";
import "./ProductCard.css";
function ProductCard({ productCardData }) {
  const { _id, image, title, price, rating, inStock } = productCardData;
  const { wish } = useWishlistContext();
  const { dispatch } = useProductContext();
  const { cart } = useCartContext();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div>
      <div class="w-full h-full flex justify-center items-center">
        <div class="relative  p-4 flex justify-center rounded-xl cursor-pointer">
          <div class="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block">
            {inStock === true ? `in Stock` : `out of stock`}
          </div>
          <div class="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"></div>
          <div class="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"></div>
          <div class="w-52 pb-2 bg-white rounded-xl  z-10">
            <div class="relative">
              <img
                src={image}
                class="max-h-60 object-cover rounded-t-xl"
                alt=""
              />

              <div class="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
                Recommended
              </div>
            </div>
            <div class="px-2 py-1">
              <Link to={`/Productdetails/${_id}`}>
                <div class="text-sm md:text-base font-bold pr-2">{title}</div>
              </Link>
              <div class="flex py-2">
                <div class="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">
                  ${price} k
                </div>
                <div class="flex justify-between item-center">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 md:h-5 md:w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <p class="text-gray-600 font-bold text-xs md:text-sm ml-1">
                      {rating}
                      <span class="text-gray-500 font-normal">
                        (76 rewiews)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  justify-center items-center p-4">
                {cart.some((prod) => prod._id === productCardData._id) ? (
                  <button
                    class="p-1 flex mb-2 justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={(_id) =>
                      removeFromCart(productCardData._id, dispatch)
                    }
                  >
                    CART-
                    <span class="material-icons">remove_shopping_cart </span>
                  </button>
                ) : (
                  <button
                    class="p-1 flex mb-2 justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={() => addToCart(productCardData, dispatch)}
                  >
                    CART+
                    <span class="material-icons "> shopping_cart</span>
                  </button>
                )}

                {wish.some(
                  (wishlist) => wishlist._id === productCardData._id
                ) ? (
                  <button
                    class="p-1 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={(_id) =>
                      deleteWishList(productCardData._id, dispatch)
                    }
                  >
                    WISHLIST-
                    <span class="material-icons">favorite </span>
                  </button>
                ) : (
                  <button
                    class="p-1 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={() => addToWishlist(productCardData, dispatch)}
                  >
                    WISHLIST+
                    <span class="material-icons"> favorite_border </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
