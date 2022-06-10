import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/index";
import Input from "../../components/input";
import SocialLoginButton from "../../components/SocialLoginButton";
import logoGoogle from "../../assets/logo-google.png";
import logoFacebook from "../../assets/logo-facebook.png";
import FormWrapper from "../../components/FormWrapper";
import login from "../../service/login";

export interface IForm {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState<IForm>({ email: "", password: "" });

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  async function loginUser() {
    try {
      const { data } = await login(values);
      if (data) {
        navigate("/home");
      }
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
      <form>
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
        <Button text="Logar no Quizz Me!" onClick={loginUser} />
        <h2>OU</h2>
        <SocialLoginButton
          text="Conectar com o Google"
          onClick={loginUser}
          image={logoGoogle}
          color="red"
        />
        <SocialLoginButton
          text="Conectar com o Facebook"
          onClick={loginUser}
          image={logoFacebook}
          color="blue"
        />

        <h2>OU</h2>

        <a onClick={handleClick}>Crie uma conta</a>
      </form>
    </FormWrapper>
  );
}
