import * as S from "./styles";

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
}

export default function Input({
  onChange,
  onBlur,
  type,
  placeholder,
  name,
  error,
  touched,
  background,
  margin,
  border
}: InputProps) {
  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        error={error}
        onBlur={onBlur}
        touched={touched}
        background={background}
        margin={margin}
        data-testid="input-test"
      />
      {error && touched && <S.InputError>{error}</S.InputError>}
    </>
  );
}
