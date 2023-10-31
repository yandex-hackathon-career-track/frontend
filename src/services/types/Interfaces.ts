export interface IInputsSettings {
  email: boolean;
  password: boolean;
  repeatPassword: boolean;
}

export interface IAuthSettings {
  title: string;
  btnText: string;
  subTitleText: string;
  linkText: string;
  path: string;
}

export interface IdataCardVacancy {
  id: string;
  title: string;
  createDate: string;
  cntViews: string;
  cntFiltered: string;
  cntFeedback: string;
  cntResume: string;
}

export interface IdataDetailsCardVacancy extends IdataCardVacancy {}

export interface ICreateVacancy {
  title: string;
  attendance: number;
  occupation: number;
  description: string;
  min_salary: number;
  max_salary: number;
  city: number;
}

export interface IGetVacancy extends ICreateVacancy {
  id: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
