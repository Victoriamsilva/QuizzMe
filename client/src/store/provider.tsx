import { TokenContext } from './context';

export interface AuxProps {
  children: React.ReactNode;
}

export function Provider({ children }: AuxProps) {
  function getToken() {
    return localStorage.getItem('token');
  }

  function setToken(token: string) {
    return localStorage.setItem('token', JSON.stringify(token));
  }
  function removeToken() {
    return localStorage.removeItem('token');
  }
  return (
    <TokenContext.Provider
      value={{
        getToken,
        setToken,
        removeToken
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
