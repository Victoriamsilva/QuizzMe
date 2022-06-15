import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import { Provider } from '../store/provider';
import { PrivateRoutes } from './private';

export function AppRoutes() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}
