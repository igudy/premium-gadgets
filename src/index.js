import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Internationalization
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("../src/locales/en/translation.json"),
    },
    yoruba: {
      translation: require("../src/locales/yoruba/translation.json"),
    },
    hausa: {
      translation: require("../src/locales/hausa/translation.json"),
    },
    igbo: {
      translation: require("../src/locales/igbo/translation.json"),
    },
  },
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
