import api from "../api";
import { IForm } from "../../pages/SignUp/index";

export default async function signUp({ name, email, password }: IForm) {
  return api.post(import.meta.env.VITE_API_URL, {
    name,
    email,
    password,
  });
}
