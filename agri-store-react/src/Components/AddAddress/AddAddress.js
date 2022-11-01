import { Address } from "../../Components/AllComponentIndex";
import { useState, Modal } from "../../Utils/CustomUtils";
function AddAddress() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button
        type="button"
        onClick={toggleModal}
        class="p-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg "
      >
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
        <button
          onClick={toggleModal}
          class="
              cursor-pointer
              absolute
              top-16
              left-4
              p-2
              h-auto
              w-12
              rounded-full
               text-white font-bold transition-colors duration-300 transform bg-gray-700  hover:bg-red-600 focus:outline-none focus:bg-gray-600"
        >
          {" "}
          X{" "}
        </button>
      </Modal>
    </div>
  );
}

export default AddAddress;
