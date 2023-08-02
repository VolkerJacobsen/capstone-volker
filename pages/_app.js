import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar.js";
import { FavoriteProvider } from "../components/Favorite/FavoriteContext";
import { Julius_Sans_One } from "@next/font/google";
import Layout from "../components/Layout/Layout";
import { SWRConfig } from "swr";

const mainFont = Julius_Sans_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps}) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <SWRConfig
value={{
  fetcher: async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return await response.json();
  },
}}
>
      <FavoriteProvider>
        <Layout>
          <Navbar />
          <Component
            {...pageProps}
            router={router}
          />
        </Layout>
      </FavoriteProvider>
      </SWRConfig>
    </>
  );
}

