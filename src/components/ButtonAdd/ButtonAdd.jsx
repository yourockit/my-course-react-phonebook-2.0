import AddIcon from '@mui/icons-material/Add';
import { StyledFab } from './ButtonAdd.styled';

export const ButtonAdd = () => {
  return (
    <>
      <StyledFab color="primary" aria-label="add">
        <AddIcon />
      </StyledFab>
    </>
  );
};
