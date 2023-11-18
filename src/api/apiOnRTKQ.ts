import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAllAttributes, IApplicantsToDetail, IAuthForm, ITokensResponse, TCreateUser } from '../helpers/tsTypes/types';
import { deleteCookie, getCookie, setCookie } from './cookieApi';
import { IConfirmPassword } from '../pages/ConfirmPassword/ConfirmPassword';
import { ICompanyState } from '../redux/slices/companySlice';
import {
  ICreateVacancy,
  IDataChangeStatus,
  IDataResponseChangeStatus,
  IGetVacancy,
  IRespondsOfVacanci,
  IVacanci,
} from '../helpers/tsTypes/Interfaces';
import { BASE_URL } from '../helpers/constants';

export const practicumApi = createApi({
  reducerPath: 'practicumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['User', 'Employer'],
  endpoints: (builder) => ({
    getUser: builder.query<string, unknown>({
      query: () => ({
        url: '/users/me',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    getEmployer: builder.query<ICompanyState, unknown>({
      query: () => ({
        url: '/employers/me',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    createVacancy: builder.mutation<IGetVacancy, ICreateVacancy>({
      query: (vacancy) => ({
        url: '/employers/vacancies/',
        method: 'POST',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
        body: {
          title: vacancy.title,
          attendance: vacancy.attendance,
          occupation: vacancy.occupation,
          description: vacancy.description,
          min_salary: vacancy.min_salary,
          max_salary: vacancy.max_salary,
          city: vacancy.city,
        },
      }),
    }),

    // ???
    tokenVerify: builder.mutation({
      query: () => ({
        url: '/auth/jwt/verify/',
        method: 'POST',
        body: {
          token: getCookie('access'),
        },
      }),
    }),

    registerUser: builder.mutation<TCreateUser, IAuthForm>({
      query: (user) => ({
        url: '/users/',
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
        url: '/auth/jwt/refresh/',
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

    authUser: builder.mutation<ITokensResponse, IAuthForm>({
      query: (user) => ({
        url: '/auth/jwt/create/',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      transformResponse: (data: ITokensResponse) => {
        setCookie('access', data.access);
        setCookie('refresh', data.refresh);
        return data;
      },
    }),

    resetPassword: builder.mutation<string, string>({
      query: (data) => ({
        url: '/users/reset_password/',
        method: 'POST',
        body: {
          email: data,
        },
      }),
    }),

    resetPasswordConfirm: builder.mutation<unknown, IConfirmPassword>({
      query: (data) => ({
        url: '/users/reset_password/',
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
        url: '/employers/me/',
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
        url: '/attributes',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // Получить всех соискателей
    getApplicants: builder.mutation<IAllAttributes, string | null>({
      query: (data) => ({
        url: `/applicants/?${data}`,
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // TODO удалить?
    // Получить избранных соискателей
    getFavoriteApplicants: builder.query<IAllAttributes, unknown>({
      query: () => ({
        url: '/applicants',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // Получить детально кандидата по id
    getApplicantToId: builder.mutation<IApplicantsToDetail, string>({
      query: (id) => ({
        url: `/applicants/${id}`,
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // Добавить в избранное
    addApplicantToFavorite: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/applicants/${id}/selected/`,
        method: 'POST',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // Удалить из избранного
    delApplicantFromFavorite: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/applicants/${id}/selected/`,
        method: 'DELETE',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // получить все вакансии
    getVacancies: builder.query<IVacanci[], unknown>({
      query: () => ({
        url: '/employers/vacancies/',
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // изменить статус вакансии
    updVacanciToId: builder.mutation<IVacanci, { id: string; parametrs: { is_published: boolean } }>({
      query: ({ id, parametrs }) => ({
        url: `/employers/vacancies/${id}/`,
        method: 'PATCH',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
        body: {
          ...parametrs,
        },
      }),
    }),

    // получить отклики на вакансию
    getVacanciToId: builder.mutation<IRespondsOfVacanci, string>({
      query: (id) => ({
        url: `/employers/vacancies/${id}/responds/`,
        method: 'GET',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
      }),
    }),

    // изменить статус отклика на вакансию
    changeStatusVacanciToId: builder.mutation<IDataResponseChangeStatus, IDataChangeStatus>({
      query: ({ respondId, status, vacanciId }) => ({
        url: `/employers/vacancies/${vacanciId}/responds/${respondId}/`,
        method: 'PATCH',
        headers: {
          Authorization: `JWT ${getCookie('access')}`,
        },
        body: {
          status: status,
        },
      }),
    }),
  }),
});

export const {
  useChangeStatusVacanciToIdMutation,
  useUpdVacanciToIdMutation,
  useAddApplicantToFavoriteMutation,
  useDelApplicantFromFavoriteMutation,
  useGetApplicantToIdMutation,
  useGetApplicantsMutation,
  useGetAllAttributesQuery,
  useGetEmployerQuery,
  useGetVacanciToIdMutation,
  useGetVacanciesQuery,
  useGetUserQuery,
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useAuthUserMutation,
  useTokenVerifyMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useChangeEmployerMutation,
  useCreateVacancyMutation,
} = practicumApi;
