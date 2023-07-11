import React from "react";
import ReactDOM from "react-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Distributor from "./pages/Distributor/Distributor";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./pages/Login/Login";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:'/About',
        element:<About />
    },
    {
        path:'/Contact',
        element:<Contact />
    },
    {
        path:'/Distributor',
        element:<Distributor />
    },
    {
      path:'/Login',
      element:<Login />
    }
  ]);

ReactDOM.render(
    
        <RouterProvider router={router} />


,document.getElementById('root'))