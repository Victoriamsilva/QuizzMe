import SearchIcon from "../../assets/icon-search.svg";
import Button from "../Button";
import Input from "../Imput";
import * as S from "./styles";

export default function Header({ onChange, onClick }: any) {
  return (
    <S.Header>
      <h1>ENCONTRE O MELHOR QUIZZ</h1>
      <div>
        <Input onChange={onChange} placeholder="Pesquisar Quizz" border="solid 1px black" background={"#c4e3ff"} margin={"5px"} />
        <Button onClick={onClick} width={"60px"} background={SearchIcon} />
      </div>
    </S.Header>
  )
}