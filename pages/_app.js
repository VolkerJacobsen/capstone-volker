import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import { projects } from "../utils/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <main>
          <Component {...pageProps} projects={projects} />
        </main>
      </Layout>
    </>
  );
}
