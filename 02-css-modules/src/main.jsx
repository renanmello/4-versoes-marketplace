import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // opcional, pode ser só um reset global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
