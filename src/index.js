import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/system";
import {createTheme} from "@mui/material";
import {Provider} from "react-redux";
import Store from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0249FF",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      main: "#000",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: "primary"},
          style: {
            color: "#000",
          },
        },
        {
          props: {variant: "main"},
          style: {
            color: "#fff",
            backgroundColor: "#0249FF",
          },
        },
      ],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
