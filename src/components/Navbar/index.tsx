import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogOut from "../../assets/exit.png";
import * as S from './styles';
import { observer } from 'mobx-react';

import { UserStoreProps } from "../../store/user/userStore";

function Navbar({ UserStore }: { UserStore: UserStoreProps }) {
  const navigate = useNavigate();
  const { getToken, removeToken, user } = UserStore;
  function logOut() {
    removeToken();
    navigate("/");
  }
  return (
    getToken()
      ?
      <S.Navbar data-testid="navbar-test">
        <img className="logo" src={Logo} onClick={() => navigate("/home")} />
        <S.Links data-testid="navbar-links-test">
          <h2 onClick={() => navigate("/home")}>Todos os Quizz</h2>
          <h2 onClick={() => navigate("/my-quizz")}>Meus Quizz</h2>
          <h2 onClick={() => navigate("/create-quizz")}>Criar Quizz</h2>
        </S.Links>
        <div className="profile" onClick={() => navigate("/my-profile")} data-testid="avatar-test">
          <S.Avatar src={user?.image} />
          <div>
            <span>{user?.name}</span>
            <small>{user?.email}</small>
          </div>
        </div>
        <div className="logOut" onClick={logOut} data-testid="logOut-test">
          <img src={LogOut} />
          <h2>Sair</h2>
        </div>
      </S.Navbar>
      : null
  )
}

export default observer(Navbar)