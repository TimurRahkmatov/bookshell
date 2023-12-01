import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";

// Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Styles
import "./index.css";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// axios
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
      <ToastContainer theme="colored" />
    </Router>
  </React.StrictMode>
);
