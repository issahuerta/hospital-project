import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Insumos from "./components/Insumos.jsx";
import Solicitudes from "./components/solicitud";
import Hospitales from "./components/Hospitales";
import Entregas from "./components/Entregas";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/insumos",
    element: <Insumos />,
  },
  {
    path: "/solicitudes",
    element: <Solicitudes />,
  },
  {
    path: "/hospitales",
    element: <Hospitales />,
  },
  {
    path: "/entregas",
    element: <Entregas />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
