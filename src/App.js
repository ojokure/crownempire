import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme.styles";
import { GlobalStyles } from "./styles/global.styles";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import WebsiteRouter from "./components/Router/WebsiteRouter";

const App = () => {
  return (
    // <Provider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <WebsiteRouter />
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
    // </Provider>
  );
};

export default App;
