import type { AppType } from "next/app";
import { ThemeProvider } from "styled-components";

import { trpc } from "../utils/trpc";
import GlobalStyles from "../shared/styles/GlobalStyles";
import { theme } from "../shared/styles/theme";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default trpc.withTRPC(MyApp);
