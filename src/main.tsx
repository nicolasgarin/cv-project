import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import { UserOptionsProvider } from "./context/UserOptionsContext.tsx";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserOptionsProvider>
      <App />
    </UserOptionsProvider>
  </React.StrictMode>
);
