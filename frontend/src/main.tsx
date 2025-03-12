import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileContext from "./context/MobileContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileContext>
    <App />
    </MobileContext>
  </StrictMode>
);
