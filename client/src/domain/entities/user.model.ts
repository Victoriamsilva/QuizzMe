export interface UserProps {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  token?: string;
  image?: string;
}

export class UserModel {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  token?: string;
  image?: string;
  constructor({
    name,
    email,
    password,
    token,
    confirmPassword,
    image
  }: UserProps) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.token = token;
    this.image =
      image ||
      'https://st.depositphotos.com/2290789/3667/i/600/depositphotos_36675429-stock-photo-king-lion-aslan.jpg';
  }
}
