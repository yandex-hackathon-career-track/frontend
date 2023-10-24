import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectOfRoute<T> {
  Element: FC | ((data: T) => JSX.Element);
  onlyLoggedIn?: boolean;
  data?: T;
}

export default function ProtectOfRoute<T>({ Element, onlyLoggedIn, data }: IProtectOfRoute<T>) {
  // TODO заменить на redux || coockie
  const loggedIn = false;

  return (onlyLoggedIn ? loggedIn : !loggedIn) ? (
    <Element {...(data as T & JSX.IntrinsicAttributes)} />
  ) : (
    <Navigate to={onlyLoggedIn ? '/login' : '/'} replace />
  );
}
