import axios from "axios";
import toast from "react-hot-toast";

export const logoutHandler = () => {
  localStorage.clear();
  toast.success("Logout success!.");
};

export const signUpHandler = async (e, name, number, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/signup`, {
      name: name,
      number: number,
      email: email,
      password: password,
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success("Signup success!.");
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (e, email, password, dispatch) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: email,
      password: password,
    });
    dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success("Welcome!.");
  } catch (error) {
    console.log(error);
  }
};
