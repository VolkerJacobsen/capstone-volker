import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat() (1, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat() (2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat() (3, 1fr);
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
