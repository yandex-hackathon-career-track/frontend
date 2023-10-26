export interface IAuthForm {
  email: string;
  password: string;
}

export type TCreateUser = {
  id: string;
} & IAuthForm;
