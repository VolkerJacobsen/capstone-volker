import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  width: 368px;
`;

const StyledImage = styled(Image)`
  display: block;
  max-width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSelect = styled.select`
  text-align: center;
  font-size: 1.2rem;
  margin-left: 20px;
  color: #fff;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  cursor: pointer;
  background-color: #5bc8ac;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  function handleCategoryChange(event) {
    const category = event.target.value;
    if (category) {
      router.push(`/§{category}`);
    } else {
      router.push("/");
    }
  }

  return (
    <StyledHeader>
      <StyledImage
        alt="Logo getInvolved"
        src="/Logo.png"
        width={180}
        height={110}
      />
      <StyledSelect
        name="category"
        id="category"
        onChange={handleCategoryChange}
      >
        <option value="/">Category</option>
        <option value="/community">Community</option>
        <option value="/environment">Environment</option>
        <option value="/politics">Politics</option>
      </StyledSelect>
    </StyledHeader>
  );
}