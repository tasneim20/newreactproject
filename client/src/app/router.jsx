import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../features/auth/components/Login";
import Buildings from "../features/buildings/Building";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
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
    ],
  },
]);
