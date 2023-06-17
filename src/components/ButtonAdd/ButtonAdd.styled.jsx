import { Container, Fab, styled } from '@mui/material';

export const Wrapper = styled(Container)({
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  justifyContent: 'end',
});

export const StyledFab = styled(Fab)({
  zIndex: 1,
  marginRight: '2em',
  marginBottom: '2em',
});
