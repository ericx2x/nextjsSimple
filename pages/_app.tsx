import { TolgeeProvider } from "@tolgee/react";
import React, { useEffect, useState } from "react";
import { TOLGEE_API_URL, TOLGEE_API_KEY } from "../API/Config/.configuration";
import "../styles/App.css";
import Login from "./login";
import { People } from "./people";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AuthProvider } from "../utils/auth/contexts/auth-context";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <TolgeeProvider
        filesUrlPrefix="i18n/"
        apiUrl={TOLGEE_API_URL}
        apiKey={TOLGEE_API_KEY}
        loadingFallback={<>Loading...</>}
      >
        <AuthProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </TolgeeProvider>
    </>
  );
}
