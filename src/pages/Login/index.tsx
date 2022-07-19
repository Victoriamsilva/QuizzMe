import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index';
import Input from '../../components/Input';
import SocialLoginButton from '../../components/SocialLoginButton';
import logoGoogle from '../../assets/logo-google.png';
import logoFacebook from '../../assets/logo-facebook.png';
import FormWrapper from '../../components/FormWrapper';
import login from '../../service/login';
import * as Yup from 'yup';
import notify from '../../utils/notify';
import { UserModel } from '../../Domain/Entities/user/user.model';
import { observer } from 'mobx-react';
import { UserStoreProps } from '../../store/user/userStore';
import { Formik, useFormik } from 'formik';

function Login({ UserStore }: { UserStore: UserStoreProps }) {
  const navigate = useNavigate();
  const { setToken, setUserInformation } = UserStore;

  const schemaUser = Yup.object().shape({
    email: Yup.string()
      .email('Formato de email inválido')
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatório')
  });

  async function loginUser(values: UserModel) {
    try {
      // const user = await login(values);
      const user = new UserModel({
        name: "Victoria",
        email: "victoria@gmail.com",
        password: "123",
        token: "1234",
        image: "https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg"
      })
      if (user.token) {
        setToken(user.token);
        setUserInformation(user);
        navigate('/home');
      }
    } catch (error: any) {
      console.log(error)
      error.response.data.message &&
        typeof error.response.data.message === 'string'
        ? notify(error.response.data.message)
        : notify('Erro inesperado');
    }
  }

  function handleClick() {
    navigate('/cadastro');
  }



  // const formik = useFormik({
  //   initialValues: { email: "", password: "" },
  //   onSubmit: loginUser,
  //   validationSchema: schemaUser
  // });

  return (
    <FormWrapper>
      <h1>Faça Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
        validationSchema={schemaUser}
        data-testid="form-test"
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          isValid,
          values
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
              value={values.email}
            />
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Senha"
              error={errors?.password}
              touched={touched.password}
              onBlur={handleBlur}
              value={values.password}
            />
            <Button text="Logar no Quizz Me!" disabled={!isValid} />
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

export default observer(Login);