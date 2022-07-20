import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index';
import Input from '../../components/Input';
import FormWrapper from '../../components/FormWrapper';
import ArrowImage from '../../assets/arrow-left.png';
import signUp from '../../service/signUp';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as S from './styles';
import notify from '../../utils/notify';
import { UserModel } from '../../Domain/Entities/user/user.model';
import userStore, { UserStoreProps } from '../../store/user/userStore';
import { observer } from 'mobx-react';
import ModalComponent from '../../components/Modal';
import { useState } from 'react';


function SignUp({ UserStore }: { UserStore: UserStoreProps }) {
  const navigate = useNavigate();
  const schemaUser = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Formato de email inválido')
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatório').min(6, 'a senha precisa ter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmar senha é obrigatório')
      .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
  });
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState('');
  const { setToken, removeToken } = UserStore;

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
        ? setError(error.response.data.message)
        : setError("Erro inesperado");
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
        data-testid="signUp-test"
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          values
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
              value={values.name}
              pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            />
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
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              error={errors?.confirmPassword}
              touched={touched.confirmPassword}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <Button text="Cadastrar-se" disabled={!isValid} />
          </form>
        )}
      </Formik>

      <ModalComponent open={open} openModal={() => setOpen(true)} closeModal={() => setOpen(false)}>
        <h2>{error}</h2>
      </ModalComponent>
    </FormWrapper>
  );
}

export default observer(SignUp);
