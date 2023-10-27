import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './CustomButton.module.css';

interface ICustomButton {
  text: string;
  variant: string;
}

export const CustomButton: FC<ICustomButton> = ({ text, variant }) => {
  return (
    <Button variant="contained" className={`${styles.button} ${styles[variant]}`}>
      {text}
    </Button>
  );
};
