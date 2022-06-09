import styled from "styled-components";
import { InputProps } from ".";

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 38px;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  margin-bottom: ${(props) => `${props.error ? "0" : "15px"}`};
  padding: 10px;
  outline: none;
  border: 2px solid transparent;
  box-sizing: border-box;
  &:focus {
    border-color: var(--background-yellow);
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
`;
export const InputError = styled.span`
  color: var(--red);
  font-weight: 100;
  font-size: 18px;
  height: 15px;
  margin: 2px 0;
  display: inline-block;
`;
