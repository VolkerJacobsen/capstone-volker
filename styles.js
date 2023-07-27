import { createGlobalStyle } from "styled-components";
import { Julius_Sans_One } from "@next/font/google";

const juliusSans = Julius_Sans_One({ weight: "400", subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${juliusSans.style.fontFamily};
  }

  button, select {
    font-family: ${juliusSans.style.fontFamily};
  }
`;
