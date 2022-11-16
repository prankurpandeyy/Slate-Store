import {
  React,
  createContext,
  useContext,
  useReducer,
} from "../Utils/CustomUtils";
const loginContext = createContext();
export const useLoginContext = () => useContext(loginContext);

function LoginPageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
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
    password: "",
    loginData: [],
  });
  const { name, email, password, loginData } = state;

  return (
    <div>
      <loginContext.Provider
        value={{
          state,
          dispatch,
          name,
          email,
          password,
          loginData,
        }}
      >
        {children}
      </loginContext.Provider>
    </div>
  );
}

export default LoginPageContext;
