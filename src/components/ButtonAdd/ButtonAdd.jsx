import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

export const ButtonAdd = ({ onOpen }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={onOpen}
      sx={{ position: 'fixed', bottom: '1em', right: '1em', zIndex: 1 }}
    >
      <AddIcon />
    </Fab>
  );
};
