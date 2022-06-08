import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/index";
import Input from "../../components/input";
import FormWrapper from "../../components/FormWrapper";
import ArrowImage from "../../assets/arrow-left.png";
import * as S from "./styles";
import signUp from "../../service/signUp";
export interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState<IForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  async function signUpUser() {
    try {
      const { data } = await signUp(values);

      if (data) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    navigate("/");
  }

  return (
    <FormWrapper>
      <S.Arrow src={ArrowImage} onClick={handleClick} />
      <h1>Cadastre-se rapidamente!</h1>
      <form>
        <Input onChange={onChange} name="name" type="text" placeholder="Nome" />
        <Input
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Input
          onChange={onChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <Button text="Cadastrar-se" onClick={signUpUser} />
      </form>
    </FormWrapper>
  );
}
