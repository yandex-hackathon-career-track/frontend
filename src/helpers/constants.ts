import { IAuthSettings, IInputsSettings } from './tsTypes/Interfaces';
import { TErrorText, TSuccessText } from './tsTypes/types';

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

export const ERROR_TEXT: TErrorText = {
  onSaveError: 'Ошибка сохранения Попробуй сохранить ещё раз',
  onLoginError: 'Не удается войти в аккаунт Проверь логин и пароль',
  onSearchError: 'Поиск не дал результатов Попробуй ввести другие данные',
  onConnectionError: 'Связь прервана Попробуй перезагрузить страницу',
  onDownloadError: 'Загрузка прервана Попробуй загрузить ещё раз',
  onUploadError: 'Не удалось загрузить документ Попробуй загрузить ещё раз',
};

export const SUCCESS_TEXT: TSuccessText = {
  onUpload: 'Документ успешно загружен Осталось только дождаться проверки',
  onCompare: 'Кандидат добавлен к сравнению И выбери лучшего',
  onBookmark: 'Резюме добавлено в избранное Теперь оно точно не потеряется',
  onDownload: 'Загрузка резюме завершена Теперь ты можешь его распечатать',
  onSave: 'Вакансия добавлена Студенты могут откликаться',
};

export const BASE_URL = 'https://www.career-tracker.ru/api/v1';
