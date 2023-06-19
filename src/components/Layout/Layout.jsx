import { Container } from '@mui/material';
import { AppBarPhonebook } from 'components/AppBarPhonebook/AppBarPhonebook';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBarPhonebook />
      <Container component="main" maxWidth="xl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
