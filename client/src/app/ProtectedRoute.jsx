import { Navigate, Outlet } from "react-router-dom";
import useCurrentUser from "@/features/auth/hooks/useCurrentUser";

function ProtectedRoute() {
  const { data: user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) return <div>Loading...</div>;

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
