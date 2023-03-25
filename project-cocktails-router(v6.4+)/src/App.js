import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import pages
import Home, { loader as cocktailsLoader } from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Root from "./pages/Root";
import { AppProvider } from "./context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppProvider>
          <Root />
        </AppProvider>
      ),
      errorElement: <Error />,
      children: [
        { index: true, element: <Home />, loader: cocktailsLoader },
        { path: "/about", element: <About /> },
        { path: "cocktail/:id", element: <SingleCocktail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
