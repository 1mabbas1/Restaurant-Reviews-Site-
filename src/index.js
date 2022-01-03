import React from "react";
import ReactDOM from "react-dom";
import { FavoritesContextProvider } from "./store/favorites-context";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
