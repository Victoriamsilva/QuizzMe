import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: beige;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 4px -2px 50px 5px rgb(0 0 0 / 25%);
  display: flex;
  cursor: pointer;

  img {
    width: 50%;
    object-fit: cover;
  }

  &:hover {
    transform: translateX(0) scale(1.01);
    transition: all 0.4s ease-in;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    img {
      width: 100%;
      max-height: 200px;
    }
  }

  @media screen and (min-width: 751px) and (max-width: 900px) {
    /* height: 200px; */
    /* img {
      height: 200px;
    } */
  }
  @media screen and (min-width: 1466px) {
    /* margin-right: 30px; */
  }
`;

export const CardText = styled.div`
  color: var(--blue-lighter);
  background: var(--beige);
  line-height: 30px;
  padding: 20px;
  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  }
  p {
    box-sizing: border-box;
  }
  @media screen and (min-width: 750px) {
    width: 50%;
  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
  }
`;
