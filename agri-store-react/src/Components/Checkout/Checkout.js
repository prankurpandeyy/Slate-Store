import React from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import {
  AddAddress,
  Razorpay,
  Spinner,
} from "../../Components/AllComponentIndex";
import {
  useAdressContext,
  useCartContext,
  useProductDataContext,
} from "../../Context/AllContextIndex";
function Checkout() {
  const { cart, totalprice, discount } = useCartContext();
  const { fulladdressdata } = useAdressContext();
  const { isLoading } = useProductDataContext();

  return (
    <div>
      <div className="flex justify-start items-start  mt-12 ">
        <div class="container px-4 sm:px-8 max-w-3xl">
          <div class="">
            <div class="-mx-4  sm:-mx-8 px-4 sm:px-8 py-4 flex justify-center items-center  overflow-x-auto">
              <div class="flex justify-center items-center min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal ">
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
                        Qty
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
                        Total
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
                        <td class="p-2 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {prod.qty}
                          </p>
                        </td>
                        <td class="p-2 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            $ {prod.price}
                          </p>
                        </td>{" "}
                        <td class="p-2 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            $ {prod.price * prod.qty}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div class="shadow-lg p-4 mt-4 w-auto bg-gray-300 dark:bg-gray-800 relative">
            <div class="flex items-end space-x-2 my-6">
              <p class="text-3xl text-black dark:text-white font-bold">
                {totalprice}
              </p>
              <span class="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  class="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                $
              </span>
            </div>
            <div class="dark:text-white">
              <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Total Price :</p>
                <div class="flex items-end text-xs">{totalprice} $</div>
              </div>
              <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Discount : </p>
                <div class="flex items-end text-xs">$ {discount}</div>
              </div>
              <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Delivery Charges : </p>
                <div class="flex items-end text-xs">$ 50</div>
              </div>
              <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Grand Total : </p>
                <div class="flex items-end text-xs">
                  {" "}
                  ${totalprice + 50 - discount}
                </div>
              </div>
              <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between"></div>
            </div>
          </div>
          <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <h2> Delivery Details</h2>
            <AddAddress />
          </div>

          <div class="flex items-center  pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <div className="flex justify-start items-center ">
              {isLoading ? (
                <Spinner />
              ) : fulladdressdata.length === 0 ? (
                <div className="cart-mesg"> add address </div>
              ) : (
                <div>
                  <div>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                      <div class="inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden ">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 p-2 text-left"
                                >
                                  Select
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 p-2  text-left"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 p-2 text-left"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 p-2 text-left"
                                >
                                  Phone
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 p-2 text-left"
                                >
                                  Address
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {fulladdressdata.map((item) => (
                                <tr class="bg-white  border-b transition duration-300 ease-in-out hover:bg-gray-100 ">
                                  <td class="text-sm text-gray-900 font-light p-2 whitespace-nowrap">
                                    <input
                                      type="radio"
                                      name="address selection"
                                    />
                                  </td>
                                  <td class="text-sm text-gray-900 font-light p-2 whitespace-nowrap">
                                    {item.fullname}
                                  </td>
                                  <td class="text-sm text-gray-900 font-light p-2 whitespace-nowrap">
                                    {item.email}
                                  </td>
                                  <td class="text-sm text-gray-900 font-light p-2 whitespace-nowrap">
                                    {item.phone}
                                  </td>
                                  <td class="text-sm text-gray-900 font-light p-2 whitespace-nowrap">
                                    {item.address}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {fulladdressdata.length === 0 ? (
            <div class="flex items-center pb-2 cursor-not-allowed mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <p className="text-xl font-bold ">
                {" "}
                Add address to enable Payment
              </p>
            </div>
          ) : (
            <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <Razorpay />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
