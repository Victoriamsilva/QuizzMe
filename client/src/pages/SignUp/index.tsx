import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index';
import Input from '../../components/input';
import FormWrapper from '../../components/FormWrapper';
import ArrowImage from '../../assets/arrow-left.png';
import * as S from './styles';
import signUp from '../../service/signUp';
import { Formik } from 'formik';
import * as Yup from 'yup';
import notify from '../../utils/notify';
import { UserModel } from '../../domain/entities/user.model';
import { useContext } from 'react';
import { TokenContext } from '../../store/context';

export default function SignUp() {
  const navigate = useNavigate();
  const schemaUser = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Formato de email inválido')
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatório'),
    confirmPassword: Yup.string()
      .required('Confirmar senha é obrigatório')
      .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
  });

  const { setToken, removeToken } = useContext(TokenContext);

  async function signUpUser({ name, email, password }: UserModel) {
    try {
      const user = await signUp({ name, email, password });
      if (user.token) {
        setToken(user.token);
        navigate('/home');
      }
    } catch (error: any) {
      error.response.data.message &&
      typeof error.response.data.message === "string"
        ? notify(error.response.data.message)
        : notify("Erro inesperado");
    }
  }

  function handleClick() {
    navigate('/');
  }

  return (
    <FormWrapper>
      <S.Arrow src={ArrowImage} onClick={handleClick} />
      <h1>Cadastre-se rapidamente!</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={signUpUser}
        validationSchema={schemaUser}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid
        }) => (
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
              placeholder="Confirme sua senha"
              error={errors?.confirmPassword}
              touched={touched.confirmPassword}
              onBlur={handleBlur}
            />
            <Button text="Cadastrar-se" disabled={!isValid} />
          </form>
        )}
      </Formik>
    </FormWrapper>
  );
}
