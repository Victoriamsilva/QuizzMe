import Eye from "../../assets/eye.svg";
import EyeClosed from "../../assets/eye-closed.svg"
import * as S from "./styles";
import { useState } from "react";

export interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean | undefined;
  type?: "email" | "password" | "text";
  placeholder?: string;
  name?: string;
  error?: string;
  background?: string;
  margin?: string;
  border?: string;
  pattern?: string;
  label?: string;
  value?: string;
}

export default function Input({
  onChange,
  onBlur,
  type,
  placeholder,
  name,
  error,
  touched,
  pattern,
  label,
  background,
  margin,
  border,
  value = ''
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  function changePasswordVisibility() {
    setShowPassword(prev => !prev)
  }
  return (
    <>
      <label>{label}</label>
      <S.Container>
        <S.Input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          error={error}
          onBlur={onBlur}
          touched={touched}
          pattern={pattern}
          background={background}
          margin={margin}
          data-testid="input-test"
        />
        {type === "password" && (
          <S.Eye
            onClick={() => changePasswordVisibility()}
            src={showPassword ? Eye : EyeClosed}
          />
        )}
      </S.Container>
      {error && touched && <S.InputError>{error}</S.InputError>}
    </>
  );
}
