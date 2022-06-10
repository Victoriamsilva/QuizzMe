import * as S from "./styles";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  type = "submit",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </S.Button>
  );
}
