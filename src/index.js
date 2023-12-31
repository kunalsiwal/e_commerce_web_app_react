import React from "react";
import ReactDOM from "react-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Distributor from "./pages/Distributor/Distributor";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Register from "./pages/Distributor/Register/Register";
import UploadDocs from "./pages/UploadDocs/UploadDocs";
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
    },
    {
      path:'/Signup',
      element:<Signup />
    },
    {
      path:'Distributor/Register',
      children:[
        {
          index:true,
          element:<Register />
        },{
        path:'upload',
        element:<UploadDocs />
      }
      
      ]
    }

  ]);

ReactDOM.render(
    
        <RouterProvider router={router} />


,document.getElementById('root'))