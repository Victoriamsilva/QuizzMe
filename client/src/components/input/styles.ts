import styled from "styled-components";
import { InputProps } from ".";

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 38px;
  border-radius: 0.375rem;
  margin-bottom: ${(props) => `${props.error && props.touched ? "0" : "15px"}`};
  padding: 10px;
  outline: none;
  border: 2px solid transparent;
  box-sizing: border-box;
  &:focus {
    border-color: var(--main-yellow);
  }
`;
export const InputError = styled.span`
  color: var(--red);
  font-weight: 100;
  font-size: 15px;
  height: 15px;
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
  margin-top: 5px;
`;
