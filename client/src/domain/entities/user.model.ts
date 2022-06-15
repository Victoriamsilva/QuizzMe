export interface UserProps {
  name?: string;
  email: string;
  password: string;
  token?: string;
  confirmPassword?: string;
}

export class UserModel {
  name?: string;
  email: string;
  password: string;
  token?: string;
  confirmPassword?: string;
  constructor({ name, email, password, token, confirmPassword }: UserProps) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.token = token;
  }
}
