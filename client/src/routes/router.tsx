import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/SignUp/index";
import Login from "../pages/Login/index";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
