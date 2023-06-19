import { Layout } from 'components/Layout/Layout';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { SkeletonAppBar } from './SkeletonAppBar/SkeletonAppBar';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <SkeletonAppBar />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignInPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/signin" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
