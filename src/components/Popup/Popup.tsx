import styles from './popup.module.css';
import { Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PopupErrorIcon, PopupSuccessIcon } from '../../media/icons';

const popup = document.getElementById('popup') as HTMLDivElement;

interface IPopup {
  text: string;
  type: 'error' | 'done';
}

export const Popup: FC<IPopup> = ({ text, type }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(!isShow);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    isShow && (
      <div
        onClick={() => setIsShow(!isShow)}
        className={`${styles.wrapper} ${type === 'error' ? styles.wrapper__error : styles.wrapper__done}`}
      >
        {type === 'error' ? <PopupErrorIcon /> : <PopupSuccessIcon />}
        <Typography>{text}</Typography>
      </div>
    ),
    popup,
  );
};
