import Input from "../../../components/Input";
import Button from "../../../components/Button";
import iconDelete from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import { QuizzModel } from "../../../Domain/Entities/quizz/quizz.model";
import { observer } from "mobx-react";
import QuizzStore, { QuizzStoreProps } from "../../../store/quizz/quizzStore";
import * as S from "./style";
import { FieldArray, useFormikContext } from "formik";
import { Checkbox } from "@mui/material";

function StepTwoQuizz() {
  const { changePage } = QuizzStore;
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  const { handleChange, handleSubmit, values, isValid, touched, handleBlur, errors } = useFormikContext<QuizzModel>();

  useEffect(() => { console.log(values, 'questions', values.questions) }, [values]);

  function checkCorrectAnswer() {
    values.questions[selectedQuestion].answers.forEach((answer, index) => {
      answer.isCorrect = false;
    }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crie o seu Quizz!</h1>

      <S.Container>
        <FieldArray
          name="questions"
          render={(arrayHelpers) => (
            <>
              {values.questions.map((question, index) => {
                return (
                  <>
                    <Button key={index} type="button" text={`Questão ${index + 1}`} onClick={() => setSelectedQuestion(index)} marginRight="8px" backgroundColor={selectedQuestion === index ? "red" : ""} />
                    <img src={iconDelete} alt="remover" onClick={() => arrayHelpers.remove(index)} />
                  </>
                )
              })}
              <Button type="button" text="+" onClick={() => {
                arrayHelpers.push({ question: "", answers: [] })
                setSelectedQuestion(values.questions.length)
              }} />
            </>
          )}
        />
      </ S.Container>

      <S.Container>
        <Input
          onChange={handleChange}
          name={`questions[${selectedQuestion}].question`}
          value={values.questions[selectedQuestion].question}
          type="text"
          placeholder="Pergunta"
          background={"var(--blue-light)"}
        />
      </S.Container>

      <S.Container>
        <FieldArray
          name={`questions[${selectedQuestion}].answers`}
          render={(arrayHelpers) => (
            <>
              {values.questions[selectedQuestion].answers.map((answer, index) => (
                <S.Container key={index}>
                  <Input
                    onChange={handleChange}
                    name={`questions[${selectedQuestion}].answers[${index}].text`}
                    value={answer.text}
                    type="text"
                    placeholder="Resposta"
                    background={"var(--blue-light)"}
                    margin="10px"
                  />
                  <Checkbox checked={answer.isCorrect} name={`questions[${selectedQuestion}].answers[${index}].isCorrect`} size="small" value={answer.isCorrect} onChange={(e) => {
                    handleChange(e)
                    checkCorrectAnswer()
                  }} />
                  <Button type="button" text="-" onClick={() => arrayHelpers.remove(index)} width="50px" />
                </S.Container>
              ))}
              <Button type="button" text="Adicionar resposta" onClick={() => arrayHelpers.push({ text: '', isCorrect: false })} />
            </>
          )}
        />
      </S.Container>

      <S.Container>
        <Button marginRight="15px" text="Voltar" type="button" onClick={() => changePage("stepOne")} />
        <Button text="Criar Quizz" disabled={!isValid} />
      </S.Container>
    </form>
  )
}

export default observer(StepTwoQuizz);
