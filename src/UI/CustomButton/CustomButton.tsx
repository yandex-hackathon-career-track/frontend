import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './CustomButton.module.css';

interface ICustomButton {
  text: string;
}

export const CustomButton: FC<ICustomButton> = ({ text }) => {
  return (
    <Button variant="contained" className={`${styles.font} ${styles.button}`}>
      {text}
    </Button>
  );
};
