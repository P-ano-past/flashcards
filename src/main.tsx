import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AlertProvider } from "./Context/AlertContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>
);
