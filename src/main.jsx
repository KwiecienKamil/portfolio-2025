import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ClientApp } from "./pages/ClientApp.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/usluga",
    element: <ClientApp />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ToastContainer position="top-center" theme="dark" />
       <RouterProvider router={router} />
  </StrictMode>
);
