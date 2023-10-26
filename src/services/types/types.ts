export interface IAuthForm {
  email: string;
  password: string;
}

export type TCreateUser = {
  id: string;
} & IAuthForm;

export interface ITokensResponce {
  access: string;
  refresh: string;
}
