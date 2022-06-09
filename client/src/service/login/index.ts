import api from "../api";
interface SignUpData {
  email: string;
  password: string;
}

export default async function login({ email, password }: SignUpData) {
  return api.post(import.meta.env.VITE_API_URL, {
    email,
    password,
  });
}
