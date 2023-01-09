import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AlertContextProvider from "./contexts/AlertContext";
import DarkmodeContextProvider from "./contexts/DarkmodeContext";
import UserContextProvider from "./contexts/UserContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <DarkmodeContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AlertContextProvider>
      </DarkmodeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
