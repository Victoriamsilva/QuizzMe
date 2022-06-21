import { createContext } from 'react';
import { UserModel } from '../domain/entities/user.model';

interface TokenContext {
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  user: UserModel | undefined;
  setUserInformation: (user: UserModel) => void;
}

export const TokenContext = createContext<TokenContext>({
  getToken: () => null,
  setToken: () => { },
  removeToken: () => { },
  user: undefined,
  setUserInformation: () => { }
});
