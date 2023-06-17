import { Container } from '@mui/material';
import { PhonebookAppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <PhonebookAppBar />
      <Container component="main" maxWidth="xl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
