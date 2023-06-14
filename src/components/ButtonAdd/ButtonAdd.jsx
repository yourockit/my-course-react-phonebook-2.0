import AddIcon from '@mui/icons-material/Add';
import { StyledFab } from './ButtonAdd.styled';

export const ButtonAdd = ({ onOpen }) => {
  return (
    <>
      <StyledFab color="primary" aria-label="add" onClick={onOpen}>
        <AddIcon />
      </StyledFab>
    </>
  );
};
