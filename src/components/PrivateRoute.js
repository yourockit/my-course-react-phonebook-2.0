import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isrefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isrefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
