import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./components/App";
import { store, persistor } from "./components/store/srore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { contactTheme } from "./thems/thems";
import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/my-course-react-hw-08-phonebook">
          <HelmetProvider>
            <ThemeProvider theme={contactTheme}>
              <CssBaseline>
                <App />
              </CssBaseline>
            </ThemeProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>{" "}
  </React.StrictMode>
);
