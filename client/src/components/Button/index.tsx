import * as S from "./styles";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  onClick?: () => void | any;
}

export default function Button({
  text,
  type = "submit",
  onClick,
}: ButtonProps) {
  return (
    <S.Button type={type} onClick={onClick}>
      {text}
    </S.Button>
  );
}
