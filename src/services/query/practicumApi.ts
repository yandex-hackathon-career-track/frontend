import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAllAttributes, IAuthForm, ITokensResponce, TCreateUser } from '../types/types';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { IConfirmPassword } from '../../pages/ConfirmPassword/ConfirmPassword';
import { ICompanyState } from '../features/companySlice';

export const practicumApi = createApi({
  reducerPath: 'practicumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://130.193.38.88/api',
  }),
  tagTypes: ['User', 'Employer'],
  endpoints: (builder) => ({
    getUser: builder.query<string, unknown>({
      query: () => ({
        url: '/v1/users/me',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    getEmployer: builder.query<ICompanyState, unknown>({
      query: () => ({
        url: '/v1/employers/me',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    getVacancies: builder.query<string, unknown>({
      query: () => ({
        url: '/v1/employers/vacancies/',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // ???
    tokenVerify: builder.mutation({
      query: () => ({
        url: '/v1/auth/jwt/verify/',
        method: 'POST',
        body: {
          token: getCookie('access'),
        },
      }),
    }),

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
    // ???

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

    changeEmployer: builder.mutation<ICompanyState, ICompanyState>({
      query: (data) => ({
        url: '/v1/employers/me/',
        method: 'PATCH',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
        body: {
          about: data.about,
          activity: data.activity,
          email: data.email,
          name: data.name,
          phone: data.phone,
          website: data.website,
        },
      }),
    }),

    // Получить все атрибуты
    getAllAttributes: builder.query<IAllAttributes, unknown>({
      query: () => ({
        url: '/v1/attributes',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // Получить всех соискателей
    getApplicants: builder.query<IAllAttributes, unknown>({
      query: () => ({
        url: '/v1/applicants',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),
  }),
});

export const getApplicantToId = (id: string) => {
  return fetch(`http://130.193.38.88/api/v1/applicants/${id}`, {
    headers: {
      Authorization: `JWT ${getCookie('access')}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log('Ошибка ' + err));
};

export const {
  useGetApplicantsQuery,
  useGetAllAttributesQuery,
  useGetEmployerQuery,
  useGetVacanciesQuery,
  useGetUserQuery,
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useAuthUserMutation,
  useTokenVerifyMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useChangeEmployerMutation,
} = practicumApi;
