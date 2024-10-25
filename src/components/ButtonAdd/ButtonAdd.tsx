import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Fab } from '@mui/material';

export const ButtonAdd = ({ onOpen }) => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'end' }}>
      <Box
        sx={{
          width: 48,
        }}
      >
        <Fab
          size="medium"
          aria-label="add"
          onClick={onOpen}
          sx={{
            position: 'fixed',
            bottom: '1em',
            zIndex: 1,
          }}
        >
          <AddIcon color="primary" sx={{ fontSize: 40 }} />
        </Fab>
      </Box>
    </Container>
  );
};
