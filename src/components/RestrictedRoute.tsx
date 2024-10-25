import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

interface Props {
  component: ReactElement;
  redirectTo?: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
