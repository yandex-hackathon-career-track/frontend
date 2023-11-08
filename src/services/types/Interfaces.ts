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

// interface IPortfolio {
//   name: string;
//   link: string;
//   thumbnail?: string;
// }

// export interface ICandidate {
//   name?: string;
//   isAvailable?: boolean;
//   isFavorite?: boolean;
//   lastSeen?: string;
//   position?: string;
//   graduated?: string;
//   experience?: string;
//   stack?: string[];
//   city?: string;
//   jobFormat?: string[];
//   schedule?: string[];
//   portfolio?: IPortfolio[];
//   certificates?: IPortfolio[];
//   tg?: string;
//   email?: string;
// }

export interface IVacanci {
  id: string;
  title: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  views_qty: number;
  responds_qty: number;
  total_resume_qty: number;
  chosen_resume_qty: number;
}

export interface IRespondDataOfVacanci {
  id: number;
  applicant: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    telegram: string;
  };
  status: {
    id: number;
    name: string;
  };
}

export interface IVacancyStats {
  new: number;
  under_review: number;
  sent_test: number;
  interview: number;
  refusal: number;
}

export interface IRespondsOfVacanci extends IVacancyStats {
  id: string;
  responds: IRespondDataOfVacanci[];
}

export interface IDataChangeStatusFunc {
  respondId: number;
  status: number;
}
export interface IDataChangeStatus extends IDataChangeStatusFunc {
  vacanciId: string;
}

export interface IDataResponseChangeStatus {
  id: number;
  applicant: string;
  status: string;
  vacancy_new_stats: IVacancyStats;
}
