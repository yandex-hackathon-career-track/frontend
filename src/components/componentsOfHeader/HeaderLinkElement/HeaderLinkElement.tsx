import React from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from './HeaderLinkElement.module.css';

interface IHeaderLinkElement {
  text: string;
  path?: string;
  Icon: React.FC;
  grey?: boolean;
  onClick?: () => void;
}

const HeaderLinkElement: React.FC<IHeaderLinkElement> = ({
  path = '#',
  text,
  Icon,
  grey = false,
  onClick = () => null,
}) => {
  const location = useLocation();
  const isPath = location.pathname === path;
  const baseColor = grey ? '#C5C5C5' : '#DDE0E4';
  return (
    <Link
      component={RouterLink}
      to={path}
      color={`${isPath ? '#FFFFFF' : baseColor}`}
      underline="none"
      style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}
      sx={{ p: '0 12px' }}
      onClick={onClick}
    >
      <Icon />
      <Typography className={styles.typography}>{text}</Typography>
    </Link>
  );
};

export default HeaderLinkElement;
