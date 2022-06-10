import api from "../api";
export interface LoginData {
  email: string;
  password: string;
}

export default async function login({ email, password }: LoginData) {
  return api.post(import.meta.env.VITE_API_URL, {
    email,
    password,
  });
}
