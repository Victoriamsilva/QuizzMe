import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import { Provider } from '../store/provider';
import { PrivateRoutes } from './private';
import Home from '../pages/Home';
import { MyQuizzes } from '../pages/MyQuizzes';
import CreateQuizz from '../components/CreateQuizz';

export function AppRoutes() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />}/>
            <Route path="/my-quizzes" element={<MyQuizzes/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}
