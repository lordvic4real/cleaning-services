import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const StyledPage = styled.div`
  font-size: 16px;
`;

const Inner = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  margin:0 ;
  padding: 0;
}

body{
  background-color:#fafafa;
  font-family:muli;
  font-size: 16px;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

export default function Page(props) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <Inner>{props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </>
  );
}
