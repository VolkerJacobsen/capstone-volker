import Image from "next/image";
import styled from "styled-components";
import Burger from "./Burger.js";

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding-top: 5px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
          <Image
            alt="Logo getInvolved"
            src="/Logo.png"
            width={140}
            height={89}
            layout="fixed"
          />
        </div>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
