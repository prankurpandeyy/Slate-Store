import { useAdressContext } from "../../Context/AllContextIndex";
import "../../Utils/CustomCSSUtils.css";
import { uuid } from "../../Utils/CustomUtils";
import { formSubmitAddAdress } from "../../Services/AddressServices";
function Address({ isOpen, setIsOpen }) {
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
    // setIsOpen(!isOpen);
  }

  return (
    <div>
      <section class="max-w-4xl mt-16 p-6 mx-auto w-96 bg-white rounded-md shadow-md  dark:bg-gray-400">
        <form onSubmit={addressSubmit}>
          <div class="flex flex-col justify-center items-center mt-4 ">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Full Name
              </label>
              <input
                id="username"
                type="text"
                name="fullname"
                value={fullname}
                placeholder="Full Name"
                required
                onChange={(e) =>
                  dispatch({ type: "FULLNAME", payload: e.target.value })
                }
                class="block w-64 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                required
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
                class="block w-64 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Ph Number
              </label>
              <input
                type="tel"
                name="Ph Number"
                value={phone}
                placeholder="Number"
                required
                onChange={(e) =>
                  dispatch({ type: "PHONE", payload: e.target.value })
                }
                class="block w-64 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Address with PINCODE
              </label>
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Address"
                required
                onChange={(e) =>
                  dispatch({ type: "ADDRESS", payload: e.target.value })
                }
                class="block w-64 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">

            <input
              type="submit"
              value="Save"
              class="px-8 
              cursor-pointer
              py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            />
          </div>
        </form>
      </section>

    </div>
  );
}

export default Address;
