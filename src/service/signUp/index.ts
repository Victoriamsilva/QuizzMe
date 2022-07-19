import { UserModel, UserProps } from '../../Domain/Entities/user/user.model';
import api from '../api';

export default async function signUp({
  name,
  email,
  password
}: UserProps): Promise<UserModel> {
  const response = await api.post<UserProps>(
    `${import.meta.env.VITE_API_URL}/user`,
    {
      name,
      email,
      password
    }
  );
  return new UserModel(response.data);
}
