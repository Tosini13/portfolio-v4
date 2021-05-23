import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { mainTheme } from "./styled/config";
import StoresProvider from "./stores/StoresProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <StylesProvider injectFirst>
        <StoresProvider>
          <App />
        </StoresProvider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
