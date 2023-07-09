import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function LinkTab(props) {
  return <Tab sx={{ color: '#fff', p: 0 }} component={NavLink} {...props} />;
}

export const NavigationMenu = ({ isLoggedIn }) => {
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === '/contacts' ? setValue(1) : setValue(0);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
      >
        <LinkTab label="Home" to="/"></LinkTab>
        {isLoggedIn && <LinkTab label="Contacts" to="/contacts"></LinkTab>}
      </Tabs>
    </>
  );
};
