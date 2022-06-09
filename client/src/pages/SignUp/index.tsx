import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index";
import Input from "../../components/input";
import FormWrapper from "../../components/FormWrapper";
import ArrowImage from "../../assets/arrow-left.png";
import * as S from "./styles";
import signUp from "../../service/signUp";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const navigate = useNavigate();
  const schemaUser = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email("Formato de email inválido")
      .required("Email é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
    confirmPassword: Yup.string().required("Senha é obrigatório"),
  });

  async function signUpUser(values: any) {
    try {
      // const { data } = await signUp(values);
      console.log(values);
      // if (data) {
      // navigate("/home");
      // }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    navigate("/");
  }

  return (
    <FormWrapper>
      <h1>Cadastre-se rapidamente!</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={signUpUser}
        validationSchema={schemaUser}
      >
        {({ handleChange, handleSubmit, errors, touched, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Nome"
              error={errors?.name}
              touched={touched.name}
              onBlur={handleBlur}
            />
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              error={errors?.email}
              touched={touched.email}
              onBlur={handleBlur}
            />
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Senha"
              error={errors?.password}
              touched={touched.password}
              onBlur={handleBlur}
            />
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Senha"
              error={errors?.confirmPassword}
              touched={touched.confirmPassword}
              onBlur={handleBlur}
            />
            <Button text="Cadastrar-se" />
          </form>
        )}
      </Formik>
      <S.Arrow src={ArrowImage} onClick={handleClick} />
    </FormWrapper>
  );
}
