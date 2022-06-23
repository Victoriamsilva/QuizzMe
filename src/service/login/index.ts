import { UserModel, UserProps } from '../../Domain/Entities/user.model';
import api from '../api';

export default async function login({
  email,
  password
}: UserProps): Promise<UserModel> {
  const response = await api.post<UserProps>(
    `${import.meta.env.VITE_API_URL}/user/login`,
    {
      email,
      password
    }
  );
  return new UserModel(response.data);
}
