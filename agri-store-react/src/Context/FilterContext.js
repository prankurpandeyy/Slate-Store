import {
  React,
  createContext,
  useContext,
  useReducer,
} from "../Utils/CustomUtils";
const filterContext1 = createContext();
export const useFilterContext = () => useContext(filterContext1);

function FilterContextReducer({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
      case "SLIDER":
        return { ...state, slider: action.payload };
      case "STOCK":
        return { ...state, stock: action.payload };
      case "RATING":
        return { ...state, rating: action.payload };
      case "SEARCHBAR":
        return { ...state, search: action.payload };
      case "CATEGORY":
        return { ...state, category: action.payload };
      case "diesel":
        return {
          ...state,
          category: {
            ...state["category"],
            diesel: !state.category.diesel,
          },
        };

      case "petrol":
        return {
          ...state,
          category: {
            ...state["category"],
            petrol: !state.category.petrol,
          },
        };

      case "ev":
        return {
          ...state,
          category: {
            ...state["category"],
            ev: !state.category.ev,
          },
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFn, {
    sort: true,
    slider: true,
    stock: false,
    rating: false,
    search: "",
    category: {
      diesel: false,
      petrol: false,
      ev: false,
    },
  });

  return (
    <div>
      <filterContext1.Provider value={{ state, dispatch }}>
        {children}
      </filterContext1.Provider>
    </div>
  );
}

export default FilterContextReducer;
