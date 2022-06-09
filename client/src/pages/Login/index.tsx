import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index";
import Input from "../../components/input";
import SocialLoginButton from "../../components/SocialLoginButton";
import logoGoogle from "../../assets/logo-google.png";
import logoFacebook from "../../assets/logo-facebook.png";
import FormWrapper from "../../components/FormWrapper";
import login from "../../service/login";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();

  const schemaUser = Yup.object().shape({
    email: Yup.string()
      .email("Formato de email inválido")
      .required("Email é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  async function loginUser(values: any) {
    try {
      // const { data } = await login(values);
      console.log(values);
      // if (data) {
      //   navigate("/home");
      // }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    navigate("/cadastro");
  }

  return (
    <FormWrapper>
      <h1>Faça Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
        validationSchema={schemaUser}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
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

            <Button text="Logar no Quizz Me!" />
            <h2>OU</h2>
            <SocialLoginButton
              text="Conectar com o Google"
              image={logoGoogle}
              color="red"
            />
            <SocialLoginButton
              text="Conectar com o Facebook"
              image={logoFacebook}
              color="blue"
            />

            <h2>OU</h2>

            <a onClick={handleClick}>Crie uma conta</a>
          </form>
        )}
      </Formik>
    </FormWrapper>
  );
}
