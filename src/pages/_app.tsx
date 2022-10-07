import type { AppType } from "next/app";
import { ThemeProvider } from "styled-components";

import { trpc } from "../utils/trpc";
import GlobalStyles from "../shared/styles/GlobalStyles";
import { theme } from "../shared/styles/theme";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default trpc.withTRPC(MyApp);
