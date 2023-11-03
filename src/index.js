import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Collection from './pages/Collection';
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "*",
        element: <HomePage />
      },
      {
        path: "collections",
        element: <Collection />
      },
     {
      path: "Car"
     }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);

