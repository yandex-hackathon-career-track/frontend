import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthForm, TCreateUser } from '../types/types';
import { IChangePassword } from '../../pages/ChangePassword/ChangePassword';

export const practicumApi = createApi({
  reducerPath: 'practicumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://130.193.38.88/api',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<string, IAuthForm>({
      query: () => ({
        url: '/v1/users/me/',
      }),
      transformResponse: (data: string) => {
        return data;
      },
    }),
    tokenVerify: builder.mutation({
      query: () => ({
        url: '/v1/auth/jwt/verify/',
        method: 'POST',
      }),
    }),
    // Прокидываем в хук RTK данные из формы и при ОК - и полученном ответе записываем данные в стор
    registerUser: builder.mutation<TCreateUser, IAuthForm>({
      query: (user) => ({
        url: '/v1/users/',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      transformResponse: (data: TCreateUser) => {
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
        body: {
          refresh: refToken,
        },
      }),
      transformResponse: (data: string) => {
        // Перезаписываем в куки accessToken + refreshToken
        // Возвращаем в компонент данные с сервака (зависит от контракта): логин/пароль и пишем в стор
        return data;
      },
    }),
    // Авторизация пользователя. Вместо первого аргумента в последствии поменяем на тип возвращаемых данных
    authUser: builder.mutation<string, IAuthForm>({
      query: (user) => ({
        url: '/v1/auth/jwt/create/',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      // Так же проставим типизацию data позднее
      transformResponse: (data: string) => {
        return data;
      },
    }),
    changePassword: builder.mutation<string, IChangePassword>({
      query: (data) => ({
        url: '/v1/users/reset_password/',
        method: 'POST',
        body: {
          email: data,
        },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useRegisterUserMutation,
  useAuthUserMutation,
  useTokenVerifyMutation,
  useChangePasswordMutation,
} = practicumApi;
