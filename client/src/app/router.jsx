import { createBrowserRouter } from "react-router-dom";
import { Login } from "../features/auth";
import Buildings from "../features/buildings/Building";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/buildings",
    element: <Buildings />,
  },
]);
