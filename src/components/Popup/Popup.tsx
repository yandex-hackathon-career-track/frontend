import styles from './popup.module.css';
import { Typography } from '@mui/material';
import { FC, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PopupErrorIcon, PopupSuccessIcon } from '../../media/icons';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const popup = document.getElementById('popup') as HTMLDivElement;

interface IPopup {
  text: FetchBaseQueryError | SerializedError | undefined;
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
        <Typography>{text as ReactNode}</Typography>
      </div>
    ),
    popup,
  );
};
