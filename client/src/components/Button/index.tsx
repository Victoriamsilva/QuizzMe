import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return <S.Button onClick={onClick}>{text}</S.Button>;
}
