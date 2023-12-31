import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./front-end/App";
import reportWebVitals from "./reportWebVitals";
import Login from "./front-end/Login";
import NoPage from "./front-end/NoPage";
import Dashboard from "./front-end/Dashboard";
import OnSale from "./front-end/OnSale";
import emailjs from "emailjs-com";

const root = ReactDOM.createRoot(document.getElementById("root"));
emailjs.init("zQwGM3eQ6YV6nOX9V");
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sale" element={<OnSale />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
