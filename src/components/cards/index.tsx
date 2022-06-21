import * as S from "./style";
import Image from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export function Card() {
  const navigate = useNavigate();
  return (
    <S.Card onClick={() => navigate("/quizz-details")} data-testid="card-test">
      <img src={Image} alt="" />
      <h1>Quizz</h1>

      {/* <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque recusandae tempora vero magnam. At deleniti a voluptatem saepe, consequuntur nam possimus facilis sunt! Dolorum ducimus dolor eligendi quo consequuntur.
      </p> */}
    </S.Card>
  )
}