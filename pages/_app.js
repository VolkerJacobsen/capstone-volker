import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
