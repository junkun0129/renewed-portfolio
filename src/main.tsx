import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./main.module.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import { AppProvider } from "./providers/AppProvider";
const theme = createTheme();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </>
);
