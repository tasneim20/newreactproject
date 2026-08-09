import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RootRedirect from "./RootRedirect";
import BuildingDetails from "../features/buildings/components/BuildingDetails";

import Login from "../features/auth/components/Login";
import Buildings from "../features/buildings/Building";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/buildings",
        element: <Buildings />,
      },
      {
        path: "/buildings/:id",
        element: <BuildingDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
