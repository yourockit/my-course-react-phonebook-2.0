import { Box, Container } from '@mui/material';
import { AppBarPhonebook } from 'components/AppBarPhonebook/AppBarPhonebook';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBarPhonebook />
      <Box pt={{ xs: 8, sm: 10 }}>
        <Container component="main" maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
