import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import "./index.css";
import BarberForm from "./Components/DashBoard/BarberForm";
import BarberList from "./Components/DashBoard/BarberList";
import BarberDetails from "./Components/DashBoard/barberDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import BarberUpdateForm from "./Components/DashBoard/BarberUpdate";

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
  {
    path: "/dashboard/detail/:id",
    element: <BarberDetails />,
  },
  {
    path: "/dashboard/update/:id",
    element: <BarberUpdateForm />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
