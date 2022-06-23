import styled from 'styled-components';
import { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  background-image: ${(props) =>
    `${props.background ? `url(${props.background})` : ''}`};
  width: ${(props) => `${props.width ? props.width : '100%'}`};
  background-repeat: ${(props) => `${props.background ? 'no-repeat' : ''}`};
  background-position: ${(props) => `${props.background ? 'center' : ''}`};
  background-color: var(--main-yellow);
  color: var(--text-blue);
  height: 38px;
  border-radius: 0.375rem;
  border: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--yellow-darker);
  }
  font-weight: 800;
`;
