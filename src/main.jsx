import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/MainRoutes";
import AuthProviders from "./providers/AuthProviders.jsx/AuthProviders";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
);
