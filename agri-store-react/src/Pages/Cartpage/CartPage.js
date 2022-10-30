import { useEffect } from "../../Utils/CustomUtils";
// import "./CartPage.css";
import {
  Header,
  Footer,
  TotalPrice,
  Spinner,
} from "../../Components/AllComponentIndex";
import {
  useCartContext,
  useProductDataContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import { removeFromCart, updateQty } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";

function CartPage() {
  const { dispatch, wish } = useWishlistContext();
  const { isLoading } = useProductDataContext();
  const { cart, state, totalprice } = useCartContext();

  useEffect(() => {
    dispatch({
      type: "TOTALPRICE",
      payload: cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price),
        0
      ),
    });
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
      <div className="flex justify-start items-center ">
        {isLoading ? (
          <Spinner />
        ) : cart.length === 0 ? (
          <div className="cart-mesg"> there are no items in Cart </div>
        ) : (
          <div class="container  px-4 sm:px-8 max-w-3xl mt-12">
            <div class="">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 flex justify-center items-center  overflow-x-auto">
                <div class="flex justify-center items-center min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Wishlist
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((prod) => (
                        <tr>
                          <td class="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {prod.title}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex-shrink-0">
                              <img
                                alt="profil"
                                src={prod.image}
                                class="mx-auto object-cover h-full w-full "
                              />
                            </div>
                          </td>
                          <td class="p-2 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              $ {prod.price}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative flex  justify-center items-center p-1 font-semibold text-green-900 leading-tight">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQty("increment", prod._id, dispatch)
                                }
                                class="p-1 h-auto w-10 font-semibold rounded-full text-white dark:bg-green-400"
                              >
                                ++
                              </button>
                              <span class="text-xl ml-2 mr-2">{prod.qty}</span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQty("decrement", prod._id, dispatch)
                                }
                                class="p-1 h-auto w-10 font-semibold rounded-full text-white dark:bg-red-400"
                              >
                                --
                              </button>
                            </span>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              {wish.some(
                                (wishlist) => wishlist._id === prod._id
                              ) ? (
                                <button
                                  onClick={(_id) =>
                                    deleteWishList(prod._id, dispatch)
                                  }
                                >
                                  <span class="material-icons">
                                    heart_broken
                                  </span>
                                </button>
                              ) : (
                                <button
                                  onClick={() => addToWishlist(prod, dispatch)}
                                >
                                  <span class="material-icons">
                                    {" "}
                                    favorite_border{" "}
                                  </span>
                                </button>
                              )}
                            </span>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <button
                                onClick={(_id) =>
                                  removeFromCart(prod._id, dispatch)
                                }
                              >
                                <span class="material-icons">delete</span>
                              </button>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        <TotalPrice />
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
