import { useAdressContext } from "../../Context/AllContextIndex";
import "./Address.css";
import { v4 as uuid } from "uuid";
import { formSubmitAddAdress } from "../../Services/AddressServices";
function Address({ modalIsOpen, setModalIsOpen }) {
  const {
    dispatch,
    toggleSubmit,
    fullname,
    email,
    phone,
    pincode,
    address,
    fulladdressdata,
  } = useAdressContext();

  const addressData = {
    id: uuid(),
    fullname: fullname,
    email: email,
    phone: phone,
    pincode: pincode,
    address: address,
  };

  function addressSubmit(e) {
    e.preventDefault();
    formSubmitAddAdress(e, addressData, fulladdressdata, dispatch);
  }

  return (
    <div>
      <div className="form-data">
        <form onSubmit={addressSubmit} className="forms">
          <label>
            <input
              class="input__field"
              type="text"
              name="fullname"
              value={fullname}
              placeholder="fullname"
              required
              onChange={(e) =>
                dispatch({ type: "FULLNAME", payload: e.target.value })
              }
            />
          </label>
          <label>
            <input
              class="input__field"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </label>
          <label>
            <input
              class="input__field"
              type="tel"
              name="number"
              value={phone}
              placeholder="number"
              required
              onChange={(e) =>
                dispatch({ type: "PHONE", payload: e.target.value })
              }
            />
          </label>
          <label>
            <input
              class="input__field"
              type="number"
              name="pincode"
              value={pincode}
              placeholder="pincode"
              required
              onChange={(e) =>
                dispatch({ type: "PINCODE", payload: e.target.value })
              }
            />
          </label>
          <label>
            <input
              class="input__field"
              type="text"
              name="address"
              value={address}
              placeholder="address"
              required
              onChange={(e) =>
                dispatch({ type: "ADDRESS", payload: e.target.value })
              }
            />
          </label>{" "}
          {toggleSubmit ? (
            <button class="btn btn-success">Save New </button>
          ) : (
            <label>
              <input
                class="input__field"
                type="submit"
                name="submitbtn"
                placeholder="submit"
                required
              />
            </label>
          )}
        </form>
      </div>
    </div>
  );
}

export default Address;
