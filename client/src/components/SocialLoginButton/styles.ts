import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--white);
  color: ${(props) => `var(--${props.color})`};
  width: 100%;
  height: 38px;
  border-radius: 0.375rem;
  border: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  font-weight: bold;
  border: solid 2px ${(props) => `var(--${props.color})`};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  img {
    height: 75%;
    margin-right: 10px;
    padding-right: 10px;
    border-right: solid 2px ${(props) => `var(--${props.color})`};
  }
  &:hover {
    background-color: var(--white-darker);
  }
`;
