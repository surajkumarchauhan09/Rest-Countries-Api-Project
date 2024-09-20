import { createRoot } from "react-dom/client";
import App from "./App";
import Error from "./components/Error";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/country",
        element:<CountryDetail/>,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
