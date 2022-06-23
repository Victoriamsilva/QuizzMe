import * as S from "./style";
import { useNavigate } from "react-router-dom";
interface CardProps {
  image: string,
  title: string,
  description: string
}

export function Card({ image, title, description }: CardProps) {
  const navigate = useNavigate();

  return (

    <S.Card onClick={() => navigate("/quizz-details")} data-testid="card-test">
      <img src={image} alt="" />
      <S.CardText>
        <h1>{title}</h1>
        <p>{description}</p>
      </S.CardText>
    </S.Card>

  )
}