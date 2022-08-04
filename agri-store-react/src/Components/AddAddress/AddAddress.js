import { Address } from "../../Components/AllComponentIndex";
import { useState, Modal } from "../../Utils/CustomUtils";
function AddAddress() {
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
        setIsOpen={setIsOpen}
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
