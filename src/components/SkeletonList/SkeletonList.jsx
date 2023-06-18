import { Avatar, Box, Divider, Grid, Skeleton } from '@mui/material';

export const SkeletonList = () => {
  const items = Array.from(Array(16).keys());
  return (
    <Box pt={{ xs: 10, sm: 12 }} sx={{ maxWidth: 'xl' }}>
      <Grid
        component="ul"
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        {items.map(arr => {
          const index = items.indexOf(arr);
          return (
            <Grid
              item
              component="li"
              key={index}
              xs={4}
              sm={2}
              md={3}
              sx={{ height: { sm: 153 } }}
            >
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Skeleton variant="circular">
                  <Avatar />
                </Skeleton>
                <Skeleton
                  sx={{
                    width: '70%',
                    marginLeft: 4,
                  }}
                ></Skeleton>
              </Box>
              <Divider variant="inset" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
