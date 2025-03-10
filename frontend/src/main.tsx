import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileContext from "./context/MobileContext.tsx";
import Query from "./query/Query.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileContext>
      <Query>
        <App />
      </Query>
    </MobileContext>
  </StrictMode>
);
