import styled from "styled-components";

const Main = styled.main`
  margin-right: 30px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
