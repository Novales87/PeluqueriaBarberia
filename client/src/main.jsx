import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import "./index.css";
import BarberForm from "./Components/DashBoard/BarberForm";
import BarberList from "./Components/DashBoard/BarberList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard/addbarber",
    element: <BarberForm />,
  },
  {
    path: "/dashboard/barbers",
    element: <BarberList />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
