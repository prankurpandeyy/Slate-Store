import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const loginContext = createContext();
export const useLoginContext = () => useContext(loginContext);

function LoginPageContext({ children }) {
  const navigate = useNavigate();

  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "NUMBER":
        return { ...state, number: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return { ...state, loginData: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    number: "",
    password: "",
    loginData: [],
  });
  const { name, email, password, number, loginData } = state;

  return (
    <div>
      <loginContext.Provider
        value={{
          state,
          dispatch,
          name,
          email,
          password,
          number,
          loginData,
        }}
      >
        {children}
      </loginContext.Provider>
    </div>
  );
}

export default LoginPageContext;
