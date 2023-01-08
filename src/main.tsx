import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AlertContextProvider from "./contexts/AlertContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlertContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertContextProvider>
  </React.StrictMode>
);
