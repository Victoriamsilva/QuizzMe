import logo from "../../assets/logo.png";
import styled from "styled-components";

export default function Logo() {
  const Image = styled.img`
    width: 350px;
  `;
  return <Image src={logo} alt="" data-testid="logo-test" />;
}
