import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogOut from "../../assets/exit.png";
import * as S from './styles';
import { useContext } from "react";
import { TokenContext } from "../../store/context";

export default function Navbar() {
  const navigate = useNavigate();
  const { getToken, removeToken, user } = useContext(TokenContext);
  function logOut() {
    removeToken();
    navigate("/");
  }
  return (
    getToken()
      ?
      <S.Navbar>
        <img className="logo" src={Logo} onClick={() => navigate("/home")} />
        <S.Links>
          <h2 onClick={() => navigate("/home")}>Todos os Quizz</h2>
          <h2 onClick={() => navigate("/my-quizz")}>Meus Quizz</h2>
          <h2>Criar Quizz</h2>
        </S.Links>
        <div className="profile" onClick={() => navigate("/my-profile")}>
          <S.Avatar src={user?.image} />
          <div>
            <span>{user?.name}</span>
            <small>{user?.email}</small>
          </div>
        </div>
        <div className="logOut" onClick={logOut}>
          <img src={LogOut} />
          <h2>Sair</h2>
        </div>
      </S.Navbar>
      : null
  )
}