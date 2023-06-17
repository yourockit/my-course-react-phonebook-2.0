import AddIcon from '@mui/icons-material/Add';
import { StyledFab, Wrapper } from './ButtonAdd.styled';
// import { Container } from '@mui/material';

export const ButtonAdd = ({ onOpen }) => {
  return (
    <Wrapper maxWidth="xl">
      <StyledFab color="primary" aria-label="add" onClick={onOpen}>
        <AddIcon />
      </StyledFab>
    </Wrapper>
  );
};
