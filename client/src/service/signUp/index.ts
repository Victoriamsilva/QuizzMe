import api from "../api";
interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export default async function signUp({ name, email, password }: SignUpData) {
  return api.post(import.meta.env.VITE_API_URL, {
    name,
    email,
    password,
  });
}
