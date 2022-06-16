import styled from "styled-components";

export const Navbar = styled.div`
 width: 200px;
 height: 100%;
 position: fixed;
 background-color: var(--main-blue);
 color: var(--main-yellow);
 padding: 40px 25px;
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 .logo {
  width: 88px;
  margin: 0 auto;
  cursor: pointer;
}
.logOut {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  padding-bottom: 25px;
  color: var(--white);
  font-size: 12px;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
  &:hover {
    color: var(--white-darker);
  }
}
  @media screen and (max-width: 600px) {
    transition: all 0.3s ease;
    transform: translateX(-200px);
  }
`;

export const Links = styled.div`
  margin-top: 100px;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      color: var(--yellow-darker)
    }
  }
`;