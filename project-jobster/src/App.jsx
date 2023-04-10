import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ErrorPage, LandingPage, Root, SignPage } from "./pages";
import {
  AddJobPage,
  AllJobsPage,
  ProfilePage,
  StatsPage,
} from "./pages/dashboard";
import { loader as protecteRouteLoader } from "./pages/Root";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: protecteRouteLoader,
      children: [
        { index: true, element: <StatsPage /> },
        { path: "all-jobs", element: <AllJobsPage /> },
        { path: "add-job", element: <AddJobPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
    { path: "/landing", element: <LandingPage /> },
    { path: "/sign", element: <SignPage /> },
  ]);

  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
