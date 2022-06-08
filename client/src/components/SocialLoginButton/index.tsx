import { BlockquoteHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
  image: any;
  color: "blue" | "red";
}

export default function SocialLoginButton({
  text,
  onClick,
  image,
  color,
}: ButtonProps) {
  return (
    <S.Button onClick={onClick} color={color}>
      <img src={image} />
      {text}
    </S.Button>
  );
}
