import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  SearchWrap,
  StyledInputBase,
} from './Search.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { Collapse } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { selectStatus } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { useState } from 'react';

export const Search = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const status = useSelector(selectStatus);
  const CONTACTS_LOCATION = '/contacts';
  const LOADED = 'loaded';
  useEffect(() => {
    status === LOADED && pathname === CONTACTS_LOCATION
      ? setShow(true)
      : setShow(false);
  }, [pathname, status]);

  const handleChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <Box sx={{ flexGrow: 0, mr: 1 }}>
      <Collapse in={show} orientation="horizontal">
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
      </Collapse>
    </Box>
  );
};
