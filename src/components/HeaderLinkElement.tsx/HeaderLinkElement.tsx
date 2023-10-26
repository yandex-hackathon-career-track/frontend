import React from 'react';
import { Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from './HeaderLinkElement.module.css';

interface IHeaderLinkElement {
  text: string;
  iconDef: string;
  iconActive?: string;
  path?: string;
  grey?: boolean;
  onClick?: () => void;
}

const HeaderLinkElement: React.FC<IHeaderLinkElement> = ({
  path = '#',
  text,
  iconDef,
  iconActive = iconDef,
  grey = false,
  onClick = () => null,
}) => {
  const location = useLocation();
  const isPath = location.pathname === path;
  const baseColor = grey ? '#C5C5C5' : '#fff';
  return (
    <Link
      component={RouterLink}
      to={path}
      color={`${isPath ? '#1D6BF3' : baseColor}`}
      underline="none"
      style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}
      sx={{ p: '0 12px' }}
      onClick={onClick}
    >
      <IconButton className={styles.icon} style={{ backgroundImage: `url(${isPath ? iconActive : iconDef})` }} />
      <Typography className={styles.typography}>{text}</Typography>
    </Link>
  );
};

export default HeaderLinkElement;
