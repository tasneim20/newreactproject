import { Navigate } from "react-router-dom";
import useCurrentUser from "@/features/auth/hooks/useCurrentUser";
import Loading from "@/components/Loading";

function RootRedirect() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loading />;
  }

  return <Navigate to={user ? "/buildings" : "/login"} replace />;
}

export default RootRedirect;
