import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

interface Props {
  component: ReactElement;
  redirectTo?: string;
}

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
