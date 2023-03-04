import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
);
