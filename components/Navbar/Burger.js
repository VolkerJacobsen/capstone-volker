import { useState } from "react";
import RightNav from "./Rightnav.js";
import { StyledBurger } from "./Burger.styled.js";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
}
