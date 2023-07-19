import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import { projects } from "../utils/data";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar.js";
import { FavoriteProvider } from "../components/Favorite/FavoriteContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <FavoriteProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} projects={projects} router={router} />
        </Layout>
      </FavoriteProvider>
    </>
  );
}
