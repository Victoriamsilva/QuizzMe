import Input from "../../components/Input";
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as S from "./styles";

export default function CreateQuizz() {
  const schemaQuizz = Yup.object().shape({
    title: Yup.string().required('Titulo é obrigatório'),
    Image: Yup.string()
  });

  function createQuizz() {

  }
  return (
    <S.Container>

      <Formik
        initialValues={{ title: "", image: "" }}
        onSubmit={createQuizz}
        validationSchema={schemaQuizz}
        data-testid="form-test"
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Titulo"
              error={errors?.title}
              touched={touched.title}
              onBlur={handleBlur}
              background={"var(--blue-light)"}
              margin={"5px"}
              label="Titulo"
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
            />


          </form>
        )}
      </Formik>
    </S.Container>
  )
}