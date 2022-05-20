import React from "react";
import { useAdressContext } from "./Context/AddressContext";

function Address() {
  const { submitAdress, state, dispatch } = useAdressContext();
  const { fullname, email, phone, pincode, address } = state;
  return (
    <div>
      <form onSubmit={() => submitAdress}>
        <label>
          <input
            class="input__field"
            type="text"
            name="fullname"
            value={fullname}
            placeholder="fullname"
            required
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
          />
        </label>
        <label>
          <input
            class="input__field"
            type="submit"
            name="submitbtn"
            placeholder="submit"
            required
          />
        </label>
      </form>
    </div>
  );
}

export default Address;
