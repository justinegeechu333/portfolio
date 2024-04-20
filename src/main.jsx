import React from "react";

import "./index.css";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./pages/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Works from "./pages/works/Works.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
