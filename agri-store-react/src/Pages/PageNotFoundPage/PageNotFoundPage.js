import {
  useEffect,
  useNavigate,
  useState,
  React,
} from "../../Utils/CustomUtils";
import { Footer, Header } from "../../Components/AllComponentIndex";
import "./PageNotFoundPage.css";

function PageNotFound() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  function componentDidMount() {
    setTimeout(() => {
      navigate("/");
    }, 15000);
  }
  useEffect(() => {
    componentDidMount();
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <Header />
      <h1 className="page-not-found-text">
        {" "}
        Page Not Found (will be redirected to Homepage in :{counter} s){" "}
      </h1>
      <div className="img">
        <img
          src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_page_not_found_re_e9o6%20(1).svg"
          alt="404"
        />
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
