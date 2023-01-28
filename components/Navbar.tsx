import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <MainContainer>
      <NavbarContainer>
        <FirstContainer>
          <Link href="/">
            <Image src={logo} alt="logo image" width={150} />
          </Link>
        </FirstContainer>
        <SecondContainer>
          <SecondContainerList>
            <SecondContainerItems>Home</SecondContainerItems>
            <SecondContainerItems>About</SecondContainerItems>
            <SecondContainerItems>Contact Us</SecondContainerItems>
          </SecondContainerList>
        </SecondContainer>
      </NavbarContainer>
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  background-color: #414141;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
export const FirstContainer = styled.div``;
export const SecondContainer = styled.div``;
export const SecondContainerList = styled.ul`
  display: flex;
`;
export const SecondContainerItems = styled.li`
  padding: 0 16px;
  font-size: 1.4em;
  color: #f6f6f6;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
`;

export default Navbar;
