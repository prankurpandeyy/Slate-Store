import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="SignupPage" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
