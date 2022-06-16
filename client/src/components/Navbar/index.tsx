import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogOut from "../../assets/exit.png";
import * as S from './styles';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <S.Navbar>
      <img className="logo" src={Logo} />
      <S.Links>
        <h2 onClick={() => navigate("/home")}>Todos os Quizz</h2>
        <h2 onClick={() => navigate("/my-quizz")}>Meus Quizz</h2>
        <h2>Criar Quizz</h2>
      </S.Links>
      <div className="logOut">
        <img src={LogOut} />
        <h2>Sair</h2>
      </div>
    </S.Navbar>
  )
}