import {
  React,
  Link,
  useNavigate,
  useEffect,
  useState,
} from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";

import { useLoginContext } from "../../Context/AllContextIndex";
import { loginHandler } from "../../Services/AuthServices";

function LoginInputs() {
  const { dispatch, email, password, name } = useLoginContext();
  const navigate = useNavigate();

  function submitLoginData() {
    // e.preventDefault();/
    loginHandler(email, password, dispatch);
    navigate("/ProductListingPage");
  }

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [email, password]);

  function setGuestLoginData(e) {
    e.preventDefault();
    const email = "6prankur@gmail.com";
    const password = "12345678";
    const name = `Guest`;
    dispatch({ type: "EMAIL", payload: email });
    dispatch({ type: "PASSWORD", payload: password });
    dispatch({ type: "NAME", payload: name });
  }
  return (
    <div>
      {/* <h3 className="login-page-title"> Login Page</h3>
      <div className="Login-Form">
        <div class="form-control">
          <form onSubmit={submitLoginData}>
            <label for="name">Email*</label>{" "}
            <input
              class="input__field"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
           /   required
              o/nChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
            <label for="name">Password*</label>{" "}
            <input
              class="input__field"
              type="password"
              value={password}
              name="input password"
              placeholder="Pas/sword"
              autoCo/mplete="on"
              required
              minlength="6"
              onChange={(e) =>
 /               dispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
            <p>
              {" "}
              <kbd style={{ fontSize: "1.2rem", padding: "1rem" }}>
                * are important.
              </kbd>{" "}
            </p>
            <div class="btn-container">
              <label>
                <input
                  class="input__field"
                  type="submit"
                  name="input submit"
                  required
                  disabled/={isDisabled}
                //>
              </label>
              <label>
                <button/ class="btn-guest-login" onClick={setGuestLoginData}>
                  Guest Login
                </button>
              </label>
            </div>
            <span style={{ color: "red" }}>{error}</span>
          </form>
          <h4 className="login-instruction">
            Not a member ?
            <Link to="/SignupPage" style={{ margin: "0.5rem" }}>
              {" "}
              Signup
            </Link>{" "}
            here
          </h4>
        </div>
      </div> */}

      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div
          class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
        >
          <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>

          <div class="mt-10">
            <form onSubmit={submitLoginData}>
              <div class="flex flex-col mb-5">
                <label
                  for="email"
                  class="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div class="relative">
                  <div
                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i class="fas fa-at text-blue-500"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) =>
                      dispatch({ type: "EMAIL", payload: e.target.value })
                    }
                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div class="relative">
                  <div
                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <span>
                      <i class="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="on"
                    onChange={(e) =>
                      dispatch({ type: "PASSWORD", payload: e.target.value })
                    }
                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div class="flex w-full">
                <input
                  type="submit"
                  class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in"
                  value="LOGIN"
                />
              </div>

              <div class="flex w-full">
                <button
                  class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  onClick={setGuestLoginData}
                >
                  <span class="mr-2 uppercase">Guest Login</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex justify-center items-center mt-6">
          <span
            href="#"
            target="_blank"
            class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
          >
            <span class="ml-2">
              You dont've an account?
              <Link
                to="/SignupPage"
                class="text-xs ml-2 text-blue-500 font-semibold"
              >
                {" "}
                Signup
              </Link>{" "}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginInputs;
