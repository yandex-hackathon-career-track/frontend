import * as yup from 'yup';

export const defaultShema = yup
  .object({
    email: yup.string().lowercase().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

export const changePassShema = yup
  .object({
    email: yup.string().email().lowercase().required(),
  })
  .required();

export const confirmPassShema = yup
  .object({
    uid: yup.string().min(36).max(36).required(),
    new_password: yup.string().min(8).max(36).required(),
  })
  .required();
