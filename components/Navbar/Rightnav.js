import Link from "next/link";
import { useRouter } from "next/router";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import { StyledUl, StyledLink } from "./Rightnav.styled.js";


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
    <StyledUl open={open}>
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
    </StyledUl>
  );
}
