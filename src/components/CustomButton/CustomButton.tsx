import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './CustomButton.module.css';

interface ICustomButton {
  text: string;
  variant: string;
  onClick?: () => void;
  isDisable?: boolean;
}

export const CustomButton: FC<ICustomButton> = ({ text, variant, onClick = () => null, isDisable = false }) => {
  return (
    <Button
      variant="contained"
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={isDisable}
    >
      {text}
    </Button>
  );
};
