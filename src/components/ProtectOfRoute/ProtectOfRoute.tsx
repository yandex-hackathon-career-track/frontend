import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../api/cookieApi';

interface IProtectOfRoute<T> {
  Element: FC | ((data: T) => JSX.Element);
  onlyLoggedIn?: boolean;
  data?: T;
}

export default function ProtectOfRoute<T>({ Element, onlyLoggedIn = false, data }: IProtectOfRoute<T>) {
  const isAuthorized = getCookie('access');

  if (!onlyLoggedIn && isAuthorized) {
    return <Navigate to={'/candidates'} />;
  }

  if (onlyLoggedIn && !isAuthorized) {
    return <Navigate to={'/login'} />;
  }

  return <Element {...(data as T & JSX.IntrinsicAttributes)} />;
}
