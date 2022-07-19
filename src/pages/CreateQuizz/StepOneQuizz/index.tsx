import Input from "../../../components/Input";
import * as Yup from 'yup';
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";
import { useState } from "react";
import { QuizzModel } from "../../../Domain/Entities/quizz/quizz.model";
import StepTwoQuizz from "../StepTwoQuizz";
import QuizzStore from "../../../store/quizz/quizzStore";
import { useFormikContext } from "formik";
import { observer } from "mobx-react";

function StepOneQuizz() {
  const { changePage } = QuizzStore;
  const { handleChange, handleSubmit, values, errors, touched, isValid, handleBlur } = useFormikContext<QuizzModel>();

  function nextStepQuizz() {
    changePage("stepTwo");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crie o seu Quizz!</h1>
      <Input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Ex: Quizz sobre o universo"
        error={errors.title}
        touched={touched.title}
        onBlur={handleBlur}
        background={"var(--blue-light)"}
        margin={"5px"}
        label="Titulo"
        value={values.title}
      />
      <Input
        onChange={handleChange}
        name="image"
        type="text"
        placeholder="URL da Imagem"
        error={errors?.image}
        touched={touched.image}
        onBlur={handleBlur}
        background={"var(--blue-light)"}
        margin={"5px"}
        label="Imagem"
        value={values.image}
      />

      <TextArea onChange={handleChange} name="description" rows="10" cols="60" label="Descrição do quizz" value={values.description} />
      <Button text="Próximo" disabled={!isValid} onClick={nextStepQuizz} />
    </form>
  )
}

export default observer(StepOneQuizz);
