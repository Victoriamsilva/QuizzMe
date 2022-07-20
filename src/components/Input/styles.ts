import styled from 'styled-components';
import { InputProps } from '.';

export const Container = styled.div<InputProps>`
  width: 100%;
  position: relative;
`;

export const Input = styled.input<InputProps>`
  background-color: ${(props) =>
    `${props.background ? props.background : null}`};
  margin-bottom: ${(props) => `${props.error && props.touched ? '0' : '15px'}`};
  margin-right: ${(props) => `${props.margin ? props.margin : ''}`};
  /* border: ${(props) => `${props.border ? props.border : ''}`}; */
  width: 100%;
  height: 38px;
  border-radius: 0.375rem;
  padding: 10px;
  outline: none;
  border: 2px solid transparent;
  box-sizing: border-box;
  padding-right: ${(props) => `${props.type === 'password' ? '25px' : ''}`};
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

export const Eye = styled.img`
  position: absolute;
  width: 20px;
  right: 5px;
  top: 10px;
  cursor: pointer;
`;
