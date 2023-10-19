import {
  useEffect,
  useNavigate,
  useState,
  React,
} from "../../Utils/CustomUtils";
import { Footer, Header } from "../../Components/AllComponentIndex";
import "./PageNotFoundPage.css";
import NoDataFound from "../../Components/Others/NoDataFound";

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
      <NoDataFound />

      <Footer />
    </div>
  );
}

export default PageNotFound;
