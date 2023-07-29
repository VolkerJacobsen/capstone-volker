import GlobalStyle from "../styles";
import { projects as initialProjects } from "../utils/data";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar.js";
import { FavoriteProvider } from "../components/Favorite/FavoriteContext";
import { Julius_Sans_One } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const mainFont = Julius_Sans_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <FavoriteProvider>
        <Layout>
          <Navbar />
          <Component
            {...pageProps}
            projects={initialProjects}
            router={router}
          />
        </Layout>
      </FavoriteProvider>
    </>
  );
}
