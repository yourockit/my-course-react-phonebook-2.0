import { Avatar, Box, Container, Grid, Paper, Skeleton } from '@mui/material';

export const SkeletonList = () => {
  const items = Array.from(Array(16).keys());
  return (
    <Container
      maxWidth="md"
      sx={{
        overflowX: 'auto',
        p: '0 !important',
      }}
    >
      <Grid
        component="ul"
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
        sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}
      >
        {items.map(arr => {
          const index = items.indexOf(arr);
          return (
            <Grid item component="li" key={index} xs={4} sm={1} md={2} lg={3}>
              <Paper
                sx={{
                  borderRadius: 6,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { sm: 'column' },
                    alignItems: { sm: 'center' },
                    height: { sm: 168, lg: 200 },
                    width: {
                      sm: 'calc((100vw - 96px) / 4)',
                      md: 'calc((100vw - 112px) / 5)',
                      lg: 'auto',
                    },
                    p: 2,
                  }}
                >
                  <Skeleton variant="circular">
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                      }}
                    />
                  </Skeleton>
                  <Skeleton
                    sx={{
                      height: 50,
                      width: 100,
                      ml: { xs: 2, sm: 0 },
                    }}
                  ></Skeleton>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
