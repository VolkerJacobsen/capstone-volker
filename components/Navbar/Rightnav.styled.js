import styled from "styled-components";

export const StyledUl = styled.ul`
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

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    color: white;
  }
`;

