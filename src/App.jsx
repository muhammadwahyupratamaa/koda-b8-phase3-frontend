import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/main/LandingPage";
import Dashboard from "./pages/main/Dasboard";
import CreateLink from "./pages/main/CreateLink";

const router = createBrowserRouter([
  // AUTH
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // MAIN
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-link",
    element: <CreateLink />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
