import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--main-blue);
  position: absolute;
  min-height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  flex-grow: 1;
  img {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 0;
    img {
      width: 50%;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8%;
  flex-grow: 1;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h1 {
    color: var(--white);
    margin-bottom: 15px;
  }
  a {
    color: var(--white);
    font-size: 36px;
    justify-content: center;
    cursor: pointer;
    text-decoration: underline;
    display: flex;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-style: italic;
    margin-bottom: 15px;
    font-size: 23px;
    &::after,
    &::before {
      content: '';
      width: 100%;
      height: 5px;
      background-color: white;
    }
    &::after {
      margin-left: 15px;
    }
    &::before {
      margin-right: 15px;
    }
  }
`;
