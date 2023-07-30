import Image from "next/image";
import Burger from "./Burger.js";
import {StyledNav} from "./Navbar.styled.js";


const Navbar = () => {
  return (
    <>
      <StyledNav>
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
      </StyledNav>
    </>
  );
};

export default Navbar;
