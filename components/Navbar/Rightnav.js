import styled from "styled-components";
import Link from "next/link";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
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

    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const RightNav = (props) => {
  const { open, setOpen } = props;

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
        <Link href="/category/community" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>
            Community projects
          </StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/category/environment" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>
            Environmental projects
          </StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/category/politics" passHref legacyBehavior>
          <StyledLink onClick={() => setOpen(!open)}>
            Political projects
          </StyledLink>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
