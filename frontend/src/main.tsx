
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// TODO: перенести в файл с импортами
import './index.scss'
import App from './App.tsx'
import './styles/main_page.scss'
import "./styles/Background.scss";
import "./styles/about_me.scss";
import "./styles/works.scss";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
