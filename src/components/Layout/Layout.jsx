import { Box, Container } from '@mui/material';
import { AppBarPhonebook } from 'components/AppBarPhonebook/AppBarPhonebook';
import { SkeletonAppBar } from 'components/SkeletonAppBar/SkeletonAppBar';
import { useAuth } from 'hooks/useAuth';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';

export const Layout = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <SkeletonAppBar />
  ) : (
    <>
      <AppBarPhonebook />
      <Box pt={{ xs: 8, sm: 9 }}>
        <Container component="main" maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
