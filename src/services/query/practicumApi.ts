import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginForm } from '../../pages/Login/Login';

export const practicumApi = createApi({
  reducerPath: 'practicumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://editor.swagger.io/api',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<string, ILoginForm>({
      query: (user) => ({
        url: '/v1/users/me/',
        params: {
          login: user.login,
          password: user.password,
        },
      }),
    }),
    // Прокидываем в хук RTK данные из формы и при ОК - и полученном ответе записываем данные в стор
    registerUser: builder.mutation<string, ILoginForm>({
      query: (user) => ({
        url: '/v1/users/',
        method: 'POST',
        params: {
          login: user.login,
          password: user.password,
        },
      }),
      transformResponse: (data: string) => {
        // Записываем в куки accessToken + refreshToken
        // Возвращаем в компонент данные с сервака (зависит от контракта): логин/пароль и пишем в стор
        return data;
      },
    }),
    // При ответе бэка, что accessToken просрочен, делаем запрос на обновление токена
    refreshToken: builder.mutation<string, string>({
      query: (refToken) => ({
        url: '/v1/auth/jwt/refresh/',
        method: 'POST',
        params: {
          refreshToken: refToken,
        },
      }),
    }),
    // Авторизация пользователя. Вместо первого аргумента в последствии поменяем на тип возвращаемых данных
    authUser: builder.mutation<string, ILoginForm>({
      query: (user) => ({
        url: '/v1/auth/jwt/create/',
        method: 'POST',
        params: {
          login: user.login,
          password: user.password,
        },
      }),
      // Так же проставим типизацию data позднее
      transformResponse: (data: string) => {
        return data;
      },
    }),
  }),
});

export const { useGetUserQuery, useRegisterUserMutation, useAuthUserMutation } = practicumApi;
