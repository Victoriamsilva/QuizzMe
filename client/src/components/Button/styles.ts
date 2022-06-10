import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--background-yellow);
  color: var(--text-blue);
  width: 100%;
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
    background-color: var(--hover-yellow);
  }
  font-weight: 800;
`;
