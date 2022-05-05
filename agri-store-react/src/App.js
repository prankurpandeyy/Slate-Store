import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ProductlistingPage from "./Pages/ProductlistingPage";
import SignupPage from "./Pages/SignupPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignupPage" element={<SignupPage />} />
        <Route path="ProductListingPage" element={<ProductlistingPage />} />
      </Routes>
    </div>
  );
}

export default App;
