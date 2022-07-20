import { FormikProvider, useFormik, useFormikContext } from "formik";
import { observer } from "mobx-react";
import { useState } from "react";
import CreateQuizz from "../../service/createQuizz";
import QuizzStore, { QuizzStoreProps } from "../../store/quizz/quizzStore";
import notify from "../../utils/notify";
import StepOneQuizz from "./StepOneQuizz";
import StepTwoQuizz from "./StepTwoQuizz";
import * as S from "./styles";
import * as Yup from 'yup';
import { QuizzModel } from "../../Domain/Entities/quizz/quizz.model";

const schemaQuizz = Yup.object().shape({
  title: Yup.string(),
  Image: Yup.string(),
  description: Yup.string(),
  questions: Yup.array()
    .of(
      Yup.object().shape({
        question: Yup.string().required('Pergunta é obrigatória'),
        answers: Yup.array().of(
          Yup.object().shape({
            text: Yup.string().required('Resposta é obrigatória'),
            isCorrect: Yup.boolean()
          })
        )
      }).required('Pergunta é obrigatória')
    )
}
);
const initialValuesQuizz = {
  id: '',
  title: '',
  description: '',
  questions: [{ question: "", answers: [{ text: "", isCorrect: false }] }]
};

function CreateQuizzForm() {
  const { viewQuizz } = QuizzStore;

  async function handleSubmitQuizz(values: QuizzModel) {
    try {
      await CreateQuizz(values);
    } catch (error: any) {
      error.response.data.message &&
        typeof error.response.data.message === "string"
        ? notify(error.response.data.message)
        : notify("Erro inesperado");
    }
  }

  const formik = useFormik({
    initialValues: initialValuesQuizz,
    onSubmit: handleSubmitQuizz,
    validationSchema: schemaQuizz,
  })
  return (
    <FormikProvider value={formik}>
      <S.Wrapper>
        {viewQuizz === "stepOne"
          ? <StepOneQuizz />
          : <StepTwoQuizz />}
      </S.Wrapper>
    </FormikProvider>
  )
}

export default observer(CreateQuizzForm);
