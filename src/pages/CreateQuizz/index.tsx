import * as S from "./styles";

export default function CreateQuizz() {
  return (
    <S.Container>
      <h1>Crie seu Próprio Quizz</h1>
      <h2>Escolha uma imagem</h2>
      <input type="file" name="arquivos" accept="image/png, image/jpeg" multiple />
      <textarea>

      </textarea>
    </S.Container>
  )
}