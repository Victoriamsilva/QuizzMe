import styled from "styled-components";

export const Arrow = styled.img`
  position: absolute;
  left: 60px;
  top: 158px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-bottom: 15px;
    position: static;
  }
`;
