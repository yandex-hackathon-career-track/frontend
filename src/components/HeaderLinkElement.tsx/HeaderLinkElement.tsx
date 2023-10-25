import React, { ReactNode } from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IHeaderLinkElement {
  text: string;
  path?: string;
  children?: ReactNode;
}

const HeaderLinkElement: React.FC<IHeaderLinkElement> = ({ path = '#', text, children }) => {
  return (
    <Link
      component={RouterLink}
      to={path}
      color="inherit"
      underline="hover"
      style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}
      sx={{ p: '0 12px' }}
    >
      {children}
      <Typography variant="subtitle2" fontSize={16} lineHeight={'normal'}>
        {text}
      </Typography>
    </Link>
  );
};

export default HeaderLinkElement;
