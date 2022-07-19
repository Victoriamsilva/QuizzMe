import * as S from "./style";
import { useNavigate } from "react-router-dom";
interface CardProps {
  image?: string,
  title?: string,
  description?: string
  onClick: () => void
}

export function Card({ image, title, description, onClick }: CardProps) {

  return (

    <S.Card onClick={onClick} data-testid="card-test">
      <img src={image} alt="" />
      <S.CardText>
        <h1>{title}</h1>
        <p>{description}</p>
      </S.CardText>
    </S.Card>

  )
}