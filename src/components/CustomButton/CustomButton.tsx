import { Button } from '@mui/material';
import { FC, ReactNode } from 'react';
import styles from './CustomButton.module.css';

interface ICustomButton {
  text: string;
  variant: string;
  onClick?: () => void;
  isDisable?: boolean;
  children?: ReactNode;
}

export const CustomButton: FC<ICustomButton> = ({
  text,
  variant,
  onClick = () => null,
  isDisable = false,
  children = null,
}) => {
  return (
    <Button
      variant="contained"
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
      {text}
    </Button>
  );
};
