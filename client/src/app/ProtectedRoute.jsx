import { Navigate, Outlet } from "react-router-dom";
import useCurrentUser from "@/features/auth/hooks/useCurrentUser";
import Loading from "@/components/Loading";

function ProtectedRoute() {
  const { data: user, isLoading, isError } = useCurrentUser();

  if (isLoading) return <Loading />;

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
