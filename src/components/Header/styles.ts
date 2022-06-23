import styled from 'styled-components';

export const Header = styled.header`
  background: radial-gradient(
    circle,
    rgba(63, 82, 175, 1) 0%,
    rgba(148, 156, 255, 1) 0%,
    rgba(180, 199, 255, 1) 37%,
    rgba(120, 139, 235, 1) 100%
  );
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  h1 {
    text-align: center;
    font-size: 30px;
    padding: 20px 20px 5px 20px;
  }
  div {
    padding: 0 30px;
    display: flex;
    flex-direction: row;
  }
`;
