import { IAuthSettings, IInputsSettings } from './types/Interfaces';

export const loginInputsSettings: IInputsSettings = {
  email: true,
  password: true,
  repeatPassword: false,
};

export const registerInputsSettings: IInputsSettings = {
  email: true,
  password: true,
  repeatPassword: true,
};

export const loginSettings: IAuthSettings = {
  title: 'Вход',
  btnText: 'Войти',
  subTitleText: 'Ещё не зарегистрированы?',
  linkText: 'Зарегистрироваться',
  path: '/signup',
};

export const registerSettings: IAuthSettings = {
  title: 'Регистрация',
  btnText: 'Зарегистрироваться',
  subTitleText: 'Уже зарегистрированы?',
  linkText: 'Войти',
  path: '/signin',
};
