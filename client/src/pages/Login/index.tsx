import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../service/api";
import Button from "../../components/Button/index";
import Input from "../../components/input";
import SocialLoginButton from "../../components/SocialLoginButton";
import logoGoogle from "../../assets/logo-google.png";
import logoFacebook from "../../assets/logo-facebook.png";
import FormWrapper from "../../components/FormWrapper";

interface IForm {
  email: string;
  senha: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState<IForm>({ email: "", senha: "" });
  const [error, setError] = useState("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function loginUser({ email, senha }: IForm) {
    api
      .post("http://localhost:3000/login", { email, senha })
      .then(({ data }) => {
        if (data) {
          setError("");
          navigate("/home");
        }
      })
      .catch((err) => {
        if (err) {
          setError(err);
        }
      });
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
        <Button text="Logar no Quizz Me!" onClick={() => loginUser(values)} />
        <h2>OU</h2>
        <SocialLoginButton
          text="Conectar com o Google"
          onClick={() => loginUser(values)}
          image={logoGoogle}
          color="red"
        />
        <SocialLoginButton
          text="Conectar com o Facebook"
          onClick={() => loginUser(values)}
          image={logoFacebook}
          color="blue"
        />

        <h2>OU</h2>

        <a onClick={handleClick}>Crie uma conta</a>
      </form>
    </FormWrapper>
  );
}
