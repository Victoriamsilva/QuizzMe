import * as S from "./styles";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "email" | "password" | "text";
  placeholder: string;
  name: string;
}

export default function Input({
  onChange,
  type,
  placeholder,
  name,
}: InputProps) {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
}
