import { makeObservable, observable, action } from 'mobx';
import { UserModel } from '../domain/entities/user.model';

export interface UserStoreProps {
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  user: UserModel | null;
  setUserInformation: (user: UserModel) => void;
}

class UserStore {
  user: UserModel | null = null;

  constructor() {
    makeObservable(this, {
      getToken: action,
      setToken: action,
      removeToken: action,
      setUserInformation: action,
      user: observable
    });
    const user = localStorage.getItem('user');
    if (user) {
      this.user = new UserModel(JSON.parse(user));
    }
  }

  getToken = () => {
    return localStorage.getItem('token');
  };

  setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token));
  };

  setUserInformation = (userParam: UserModel) => {
    localStorage.setItem('user', JSON.stringify(userParam));
    this.user = userParam;
  };

  removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
}

export default new UserStore();
