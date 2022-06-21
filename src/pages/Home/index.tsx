import { useNavigate } from "react-router-dom";
import { Card } from "../../components/cards";
import { Wrapper } from "../../components/FormWrapper/styles";
import * as S from "./styles";


export default function Home() {
  return (
    <S.CardsWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />


    </S.CardsWrapper>


  )
}