import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./utils/ChartjsConfig";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
