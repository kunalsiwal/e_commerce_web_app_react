import React from "react";
import ReactDOM from "react-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:'/About',
        element:<About />
    }
  ]);

ReactDOM.render(
    
        <RouterProvider router={router} />


,document.getElementById('root'))