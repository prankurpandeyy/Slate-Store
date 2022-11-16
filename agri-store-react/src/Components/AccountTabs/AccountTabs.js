import {
  useState,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  Modal,
} from "../../Utils/CustomUtils";
// import "../../Utils/CustomCSSUtils.css";
import {
  useAdressContext,
  useProductContext,
  useCartContext,
} from "../../Context/AllContextIndex";
import { Accountdetails, Address } from "../../Components/AllComponentIndex";
import { deleteAddress, editAddress } from "../../Services/AddressServices";

function AccountTabs() {
  const { fulladdressdata, dispatch } = useAdressContext();
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useProductContext();
  const orderData = state;
  const { cart, totalprice, discount } = useCartContext();

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="mt-24  flex justify-center items-center flex-col">
      <ul
        class="nav nav-tabs shadow rounded-lg overflow-hidden flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-home"
            class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Account
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Address
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Order
          </a>
        </li>
      </ul>
      <div class="tab-content" id="tabs-tabContent">
        <div
          class="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          <Accountdetails />
        </div>
        <div
          class="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <button
            onClick={toggleModal}
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Address+
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="modal"
          >
            <div className="address-form">
              <Address />
            </div>

            <div class="flex space-x-2 justify-center">
              <button
                onClick={toggleModal}
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                X
              </button>
            </div>
          </Modal>
          <div className="shadow-xl ">
            {fulladdressdata &&
              fulladdressdata.map((address) => (
                <div className="mt-2 ">
                  <div className="fullname">
                    <h5> Name : {address.fullname}</h5>
                  </div>
                  <div className="email">
                    <p>Email :{address.email}</p>
                  </div>
                  <div className="phone">
                    <p>Phone: {address.phone}</p>
                  </div>
                  <div className="address">
                    <p>Address: {address.address}</p>
                  </div>
                  <div className="action-btn">
                    <button
                      className="hover:bg-red-500"
                      title="delete"
                      onClick={() =>
                        deleteAddress(address.id, dispatch, fulladdressdata)
                      }
                    >
                      <span class="material-icons">delete</span>
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Purchased At
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.orderData.cart &&
                        orderData.orderData.cart.map((prod) => (
                          <tr class="border-b shadow-md">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {prod.title}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div class="flex-shrink-0">
                                <img
                                  alt="profil"
                                  src={prod.image}
                                  class="mx-auto object-cover h-24 cover w-24 "
                                />
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {prod.updatedAt}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {prod.qty}
                            </td>{" "}
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {prod.price}
                            </td>{" "}
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {prod.qty * prod.price}
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
      </div>
    </div>
  );
}

export default AccountTabs;
