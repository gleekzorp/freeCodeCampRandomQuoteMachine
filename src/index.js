import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import ColorContextProvider from "./providers/ColorProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>,
  rootElement
);
