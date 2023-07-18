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
  margin-bottom: 10px;
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

const StyledButton = styled.button`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 10px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;

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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  function handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    if (selectedCategory === "/") {
      router.push("/");
    } else {
      router.push(`/category${selectedCategory}`);
    }
  }

  function handleAllProjectsClick() {
    router.push("/all-projects");
  }

  return (
    <>
      <StyledHeader>
        <StyledImage
          alt="Logo getInvolved"
          src="/Logo.png"
          width={140}
          height={89}
        />
        <StyledButtonContainer>
          <StyledSelect
            name="category"
            value={currentPath}
            id="category"
            onChange={handleCategoryChange}
          >
            <option value="/">Category</option>
            <option value="/community">Community</option>
            <option value="/environment">Environment</option>
            <option value="/politics">Politics</option>
          </StyledSelect>
          <StyledButton name="all-projects" onClick={handleAllProjectsClick}>
            All Projects
          </StyledButton>
        </StyledButtonContainer>
      </StyledHeader>
    </>
  );
}
