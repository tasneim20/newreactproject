import { createBrowserRouter } from "react-router-dom";
import { Login } from "../features/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
