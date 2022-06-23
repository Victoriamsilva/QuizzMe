import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import { Provider } from 'mobx-react';
import { PrivateRoutes } from './private';
import Home from '../pages/Home';
import { MyQuizzes } from '../pages/MyQuizzes';
import CreateQuizz from '../pages/CreateQuizz';
import Navbar from '../components/Navbar';
import Profile from '../pages/Profile';
import { Wrapper } from '../styles/styles';
import UserStore from '../store/userStore';

export function AppRoutes() {
  return (
    <Provider {...{ UserStore }}>
      <Router data-testid="routes-test">
        <Navbar UserStore={UserStore} />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login UserStore={UserStore} />} />
            <Route path="/cadastro" element={<Cadastro UserStore={UserStore} />} />
            <Route element={<PrivateRoutes UserStore={UserStore} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/my-quizzes" element={<MyQuizzes />} />
              <Route path="/my-profile" element={<Profile />} />
              <Route path='/create-quizz' element={<CreateQuizz />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
}