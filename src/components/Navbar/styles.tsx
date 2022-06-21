import styled from "styled-components";

export const Navbar = styled.div`
 width: 200px;
 height: 100vh;
 background: linear-gradient(39deg, rgba(51,59,101,1) 27%, rgba(82,102,205,1) 100%);
 color: var(--main-yellow);
 padding: 25px 18px;
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
  color: var(--white);
  font-size: 10px;
  margin-top: 20px;
  cursor: pointer;
  img {
    width: auto;
    height: 16px;
    margin-right: 4px;
  }
  h2 {
    padding-top: 2px;
  }
  &:hover {
    color: var(--yellow-darker);
  }
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: var(--white);
  padding: 10px 0;
  border-top: solid 1px;
  border-bottom: solid 1px;
  cursor: pointer;
  span {
    display: block;
  }
  small {
    font-size: 15px;
  }
  &:hover {
    color: var(--white-darker);
    border-top: solid 1px var(--white);
    border-bottom: solid 1px var(--white);
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
  flex-grow: 1;
  transition: all 0.3s ease;
  h2 {
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

export const Avatar = styled.img`
border-radius: 100%;
width: 34px;
height: 34px;
background-color: var(--main-yellow);
margin-right: 8px;
`;