import "@fontsource/inter/variable.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./routes/admin/Dashboard";
import ErrorPage from "./routes/errorPage";
import Home from "./routes/home";
import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
