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
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <Skeleton sx={{ width: 24, height: 40, ml: '1em' }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Stack direction="row" spacing={2}>
              <Skeleton sx={{ width: 60, height: 40 }} />
              <Skeleton sx={{ width: 80, height: 40 }} />
            </Stack>
          </Box>
          <Stack direction="row" spacing={2} mr={2}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton sx={{ width: 24, height: 40 }} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
