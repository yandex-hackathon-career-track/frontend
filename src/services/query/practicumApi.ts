import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthForm, ITokensResponce, TCreateUser } from '../types/types';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { IConfirmPassword } from '../../pages/ConfirmPassword/ConfirmPassword';

export const practicumApi = createApi({
  reducerPath: 'practicumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://130.193.38.88/api',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<string, unknown>({
      query: () => ({
        url: '/v1/users/me/',
        method: 'GET',
      }),
    }),
    // После проверки делаем запрос на рефреш токена. Вопрос как сделать (???)
    tokenVerify: builder.mutation({
      query: () => ({
        url: '/v1/auth/jwt/verify/',
        method: 'POST',
        body: {
          token: getCookie('access'),
        },
      }),
    }),
    // OK
    registerUser: builder.mutation<TCreateUser, IAuthForm>({
      query: (user) => ({
        url: '/v1/users/',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
    }),
    // ?
    refreshToken: builder.mutation<string, unknown>({
      query: () => ({
        url: '/v1/auth/jwt/refresh/',
        method: 'POST',
        body: {
          refresh: getCookie('refresh'),
        },
      }),
      transformResponse: (data: string) => {
        deleteCookie('refresh');
        setCookie('access', data);
        return data;
      },
    }),
    // OK
    authUser: builder.mutation<ITokensResponce, IAuthForm>({
      query: (user) => ({
        url: '/v1/auth/jwt/create/',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      transformResponse: (data: ITokensResponce) => {
        setCookie('access', data.access);
        setCookie('refresh', data.refresh);
        return data;
      },
    }),
    // 500
    resetPassword: builder.mutation<string, string>({
      query: (data) => ({
        url: '/v1/users/reset_password/',
        method: 'POST',
        body: {
          email: data,
        },
      }),
    }),
    resetPasswordConfirm: builder.mutation<unknown, IConfirmPassword>({
      query: (data) => ({
        url: '/v1/users/reset_password/',
        method: 'POST',
        body: {
          uid: data.uid,
          token: getCookie('access'),
          new_password: data.new_password,
        },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useAuthUserMutation,
  useTokenVerifyMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
} = practicumApi;
