import React, { useState } from "react";
import { useAdressContext } from "../Components/Context/AddressContext";

import Modal from "react-modal";
import Address from "../Components/Address";
function AddAddress() {
  const { fulladdressdata, editAddress, deleteAddress } = useAdressContext();
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
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
    </div>
  );
}

export default AddAddress;
