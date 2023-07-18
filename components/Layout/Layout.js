import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: block;
  width: 368px;
  height: 100vh;
  overflow: auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
