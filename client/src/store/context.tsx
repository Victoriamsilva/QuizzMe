import { createContext } from 'react';

interface TokenContext {
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const TokenContext = createContext<TokenContext>({
  getToken: () => null,
  setToken: () => {},
  removeToken: () => {}
});
