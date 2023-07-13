import GlobalStyle from "../styles";
import { projects } from "../utils/data";
import styled from "styled-components";

const Device = styled.div`
  position: relative;
  display: block;
  width: 368px;
  height: 100vh;
  overflow: auto;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Device>
        <GlobalStyle />
        <main>
          <Component {...pageProps} projects={projects} />
        </main>
      </Device>
    </>
  );
}
