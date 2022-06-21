import styled from 'styled-components';

export const Card = styled.div`
  width: 30%;
  height: 300px;
  border: solid 2px var(--black);
  background-color: beige;
  border-radius: 20px;
  box-shadow: 4px -2px 50px 5px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  cursor: pointer;
  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 20px 0px 20px;
  }
  img {
    width: 100%;
  }
  p {
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    border-radius: 0 18px;
    background: radial-gradient(
      circle,
      rgb(40 108 150) 35%,
      rgb(23 54 108) 95%,
      rgba(92, 214, 224, 1) 100%,
      rgba(78, 108, 111, 1) 100%
    );
  }
`;
