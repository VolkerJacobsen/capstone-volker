import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import { useState, useEffect } from "react";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap !important;
    background-color: #a7c7e7;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 3;

    li {
      position: relative;
      color: #fff;
    }
  }
`;

/*const StyledSelect = styled.select`
  background-color: #fff;
  color: black;
  width: 230px;
  border: none;
  font-size: 20px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    background-color: #a7c7e7;
    color: white;
  }
`;*/

const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    color: white;
  }
`;

export default function RightNav(props) {
  const { open, setOpen } = props;
  const router = useRouter();

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory !== "") {
      router.push(`/category/${selectedCategory}`);
    }
    setOpen(false);
  };

  const selectedCategory = router.query.category || "";

  return (
    <Ul open={open}>
      <li>
        <Link href="/" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>About us</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/all-projects" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>All projects</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/favorites" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>My favorites</StyledLink>
        </Link>
      </li>
      <li>
        <CustomDropdown
          aria-label="Select Category"
          onChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        ></CustomDropdown>
      </li>
    </Ul>
  );
}
