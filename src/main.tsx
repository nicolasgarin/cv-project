import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import "./styles/techsTree.scss"
import { UserOptionsProvider } from "./context/UserOptionsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserOptionsProvider>
      <App />
    </UserOptionsProvider>
  </React.StrictMode>
);
