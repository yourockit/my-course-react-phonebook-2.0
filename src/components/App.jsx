import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn'));

export const App = () => {
  return (
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
