import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';

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
     
      // {
      //   path: "privacy_policy",
      //   element: (
      //     <ContentPage paragraph={privacy_policy} heading={"Privacy Policy"} />
      //   )
      // },
      // {
      //   path: "terms_of_services",
      //   element: (
      //     <ContentPage
      //       paragraph={terms_Of_Services}
      //       heading={"Terms of services"}
      //     />
      //   )
      // },
      // {
      //   path: "community_standard",
      //   element: (
      //     <ContentPage
      //       paragraph={community_standard}
      //       heading={"Community Standards"}
      //     />
      //   )
      // },
 
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  // <Provider store={store}>
    <RouterProvider router={router} />
  // </Provider>
  // </React.StrictMode>
);

