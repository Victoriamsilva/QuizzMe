import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border-radius: 0.375rem;
  border: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;
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
