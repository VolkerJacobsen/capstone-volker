import Image from "next/image";
import styled from "styled-components";

const StyledBackButton = styled.button`
  background-color: white;
  border: none;
  margin: 20px;
`;

export default function StyledBack() {
  return (
    <StyledBackButton
      cursor="pointer"
      aria-label="back"
      type="button"
      onClick={() => history.back()}
    >
      <Image alt="back icon" src="/back.gif" width={30} height={30} />
    </StyledBackButton>
  );
}
