import * as S from "./styles";

export interface ButtonProps {
  text?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
  width?: any;
  background?: string;
}

export default function Button({
  text,
  type = "submit",
  disabled = false,
  onClick,
  width,
  background
}: ButtonProps) {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled} width={width} background={background} data-testid="button-test">
      {text}
    </S.Button>
  );
}
