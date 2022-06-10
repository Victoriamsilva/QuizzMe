import { BlockquoteHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps {
  text: string;
  image: any;
  color: "blue" | "red";
}

export default function SocialLoginButton({ text, image, color }: ButtonProps) {
  return (
    <S.Button color={color} type="submit">
      <img src={image} />
      {text}
    </S.Button>
  );
}
