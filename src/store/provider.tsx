import { useState } from 'react';
import { UserModel } from '../domain/entities/user.model';
import { TokenContext } from './context';
import { useEffect } from "react";


interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [user, setUser] = useState<UserModel | undefined>(undefined);

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        setUser(new UserModel(JSON.parse(user)));
      }
    } catch (err) {
      console.log(err)
    }

  }, [])

  function getToken() {
    return localStorage.getItem('token');
  }
  function setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  function setUserInformation(user: UserModel) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  function removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  }
  return (
    <TokenContext.Provider
      value={{
        getToken,
        setToken,
        removeToken,
        user,
        setUserInformation
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
