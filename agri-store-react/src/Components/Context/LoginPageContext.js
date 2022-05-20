import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";

const loginContext = createContext();
export const useLoginContext = () => useContext(loginContext);

function LoginPageContext({ children }) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [loginData, setLoginData] = useState([]);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      setLoginData(response.data.foundUser);
      const token = localStorage.getItem(`token`, response.data.encodedToken);

      Toast({
        type: "success",
        mesg: `Hi ${loginData.name} , logged in `,
      });

      navigate("/AccountPage");
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (e) => {
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
      Toast({ type: "success", mesg: "user signedup in " });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    Toast({
      type: "info",
      mesg: ` you had been logged out `,
    });
    navigate("/");
  };

  return (
    <div>
      <loginContext.Provider
        value={{
          name,
          number,
          email,
          password,
          setEmail,
          loginData,
          setLoginData,
          setName,
          setPassword,
          setNumber,
          signUpHandler,
          loginHandler,
          logoutHandler,
        }}
      >
        {children}
      </loginContext.Provider>
    </div>
  );
}

export default LoginPageContext;
