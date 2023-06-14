import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  SearchWrap,
  StyledInputBase,
} from './Search.styled';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <Box sx={{ flexGrow: 0, mr: 1 }}>
      <SearchWrap>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </SearchWrap>
    </Box>
  );
};
