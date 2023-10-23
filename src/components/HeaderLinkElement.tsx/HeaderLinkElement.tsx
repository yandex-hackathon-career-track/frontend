import React, { ReactNode } from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IHeaderLinkElement {
  path?: string;
  text: string;
  children?: ReactNode;
}

const HeaderLinkElement: React.FC<IHeaderLinkElement> = ({ path = '/', text, children }) => {
  return (
    <Typography variant="subtitle2" fontSize={16} lineHeight={'normal'}>
      {children}
      <Link component={RouterLink} to={path} color="inherit" underline="hover">
        {text}
      </Link>
    </Typography>
  );
};

export default HeaderLinkElement;
