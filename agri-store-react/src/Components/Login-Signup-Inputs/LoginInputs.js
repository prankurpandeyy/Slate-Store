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
    console.log("🚀 ~ file: LoginInputs.js:38 ~ setGuestLoginData ~ email:", email)
    const password = "12345678";
    const name = `Guest`;
    dispatch({ type: "EMAIL", payload: email });
    dispatch({ type: "PASSWORD", payload: password });
    dispatch({ type: "NAME", payload: name });
  }
  return (
    <div>

      {/* 
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
                  cursor-pointer
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
      </div> */}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
            <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-white text-lg font-medium title-font mb-5">Log In</h2>
            <div>


              <form onSubmit={submitLoginData}>


                <div class="relative mb-4">


                  <label for="full-name" class="leading-7 text-sm text-gray-400">Email</label>
                  <input id="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) =>
                      dispatch({ type: "EMAIL", payload: e.target.value })
                    } class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-400">Password</label>
                  <input id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="enter your password"
                    onChange={(e) =>
                      dispatch({ type: "PASSWORD", payload: e.target.value })
                    } class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex flex-col">


                  <input type='submit' class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg cursor-pointer" />

                  <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-2"
                    onClick={setGuestLoginData}
                  >Guest Login</button>
                </div>
              </form>
            </div>


            <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.
              <Link
                to="/SignupPage"
                class="text-xs ml-2 text-blue-500 font-semibold"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SignUp</a>
              </Link>

            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginInputs;
