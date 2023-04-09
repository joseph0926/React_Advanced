import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DashboradPage, ErrorPage, LandingPage, Root, SignPage } from "./pages";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboradPage /> },
        { path: "landing", element: <LandingPage /> },
        { path: "sign", element: <SignPage /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
