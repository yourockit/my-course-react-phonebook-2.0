import * as React from 'react';
import { Box } from '@mui/system';
import { StyledBackdrop, StyledModal, style } from './Modal.styled';

export const Modal = ({ onOpen, onClose, children }) => {
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={onOpen}
        onClose={onClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>{children}</Box>
      </StyledModal>
    </div>
  );
};
