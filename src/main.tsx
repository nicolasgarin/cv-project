import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "./styles/techsTree.scss"
import { UserOptionsProvider } from "./context/UserOptionsContext.tsx";
import { DataProvider } from "./context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserOptionsProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </UserOptionsProvider>
  </React.StrictMode>
);
