import api from "../api";
import { IForm } from "../../pages/Login/index";

export default async function login({ email, password }: IForm) {
  return api.post(import.meta.env.VITE_API_URL, {
    email,
    password,
  });
}
