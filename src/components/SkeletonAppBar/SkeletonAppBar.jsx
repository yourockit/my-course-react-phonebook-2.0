import {
  AppBar,
  Toolbar,
  Container,
  Skeleton,
  Box,
  Stack,
  Avatar,
} from '@mui/material';

export const SkeletonAppBar = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Skeleton sx={{ width: 32, height: 40, ml: '1em' }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={2}>
              <Skeleton sx={{ width: 60, height: 40 }} />
              <Skeleton sx={{ width: 60, height: 40 }} />
            </Stack>
          </Box>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton sx={{ width: 32, height: 40 }} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
