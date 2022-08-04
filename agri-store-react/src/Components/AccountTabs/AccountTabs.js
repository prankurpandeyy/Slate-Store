import {
  useState,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  Modal,
} from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
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
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Account</Tab>
          <Tab>Address</Tab>
          <Tab>Order</Tab>
        </TabList>
        <TabPanel>
          <p>
            <Accountdetails />
          </p>
        </TabPanel>
        <TabPanel>
          <div>
            <button onClick={toggleModal} className="btn btn-primary-outline">
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
              <button onClick={toggleModal} className="btn btn-close">
                X
              </button>
            </Modal>
            <div className="address-data">
              {fulladdressdata &&
                fulladdressdata.map((address) => (
                  <div>
                    <div className="fullname">
                      <h5> Name : {address.fullname}</h5>
                    </div>
                    <div className="email">
                      <p>Email :{address.email}</p>
                    </div>
                    <div className="phone">
                      <p>Phone: {address.phone}</p>
                    </div>
                    <div className="pincode">
                      <p>Pincode: {address.pincode}</p>
                    </div>
                    <div className="address">
                      <p>Address: {address.address}</p>
                    </div>
                    <div className="action-btn">
                      <button
                        className="hcard decrease"
                        title="delete"
                        onClick={() =>
                          deleteAddress(address.id, dispatch, fulladdressdata)
                        }
                      >
                        <span class="material-icons">delete</span>
                      </button>
                      {/* <button
                        className="hcard decrease"
                        title="edit"
                        onClick={editAddress}
                      >
                        <span class="material-icons">edit</span>
                      </button> */}
                    </div>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="order-success-details-tabs">
              <div className="order-success-text-tab">
                <h3>Order Id : {orderData.orderData.order_id}</h3>
                <h4> Product Ordered List : </h4>
              </div>
              <table className="checkout-table-order">
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Purchased At</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
                {orderData.orderData.cart &&
                  orderData.orderData.cart.map((prod) => (
                    <tr>
                      <td>{prod.title}</td>
                      <td>
                        <img
                          src={prod.image}
                          alt="purchased-products"
                          style={{ height: "5rem", width: "10rem" }}
                        />
                      </td>
                      <td>{prod.updatedAt}</td>
                      <td>{prod.qty}</td>
                      <td>{prod.price}</td>
                      <td>{prod.qty * prod.price}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AccountTabs;
