import axios from "axios";
import toast from "react-hot-toast";

export async function getProdcutsData(dispatch) {
  dispatch({ type: "LOADINGSPINNER", payload: true });
  try {
    await axios({
      method: "GET",
      url: `/api/products`,
    }).then((response) =>
      dispatch({ type: "APIPRODUCTDATA", payload: response.data.products })
    );

    dispatch({ type: "LOADINGSPINNER", payload: false });
  } catch (erorr) {
    toast.error(`Server is encountering some issues:`, erorr);
    console.log(`Server is encountering some issues:`, erorr);
  }
}
