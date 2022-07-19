import * as S from "./styles";

export interface ButtonProps {
  text?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: (parameter?: any) => void;
  width?: any;
  background?: string;
  backgroundColor?: string;
  marginRight?: string;
  handleChange?: any;
}

export default function Button({
  text,
  type = "submit",
  disabled = false,
  onClick,
  width,
  background,
  backgroundColor,
  marginRight,
  handleChange
}: ButtonProps) {
  return (
    <S.Button onChange={handleChange} type={type} onClick={onClick} disabled={disabled} marginRight={marginRight} width={width} backgroundColor={backgroundColor} background={background} data-testid="button-test">
      {text}
    </S.Button>
  );
}
