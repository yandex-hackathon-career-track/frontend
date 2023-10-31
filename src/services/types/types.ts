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

type TFieldObject = {
  id: number;
  name: string;
};

type TCourses = TFieldObject & {
  direction: {
    id: number;
    name: string;
  };
};

export interface IAllAttributes {
  directions: TFieldObject[];
  cources: TCourses[];
  stack: TFieldObject[];
  work_formats: TFieldObject[];
  occupations: TFieldObject[];
  cities: TFieldObject[];
  activity_statuses: TFieldObject[];
  review_statuses: TFieldObject[];
}

interface IApplicant {
  id: string;
  user: string;
  first_name: string;
  last_name: string;
  stack: { id: number; name: string }[];
  status: { id: number; name: string };
  direction: { id: number; name: string };
  updated_at: string;
  total_experience: string;
  is_selected: boolean;
}

export interface IApplicantMainInfo extends IApplicant {
  latest_graduation_date: string;
}

export interface IApplicantsToDetail extends IApplicant {
  city: string;
  applicant_courses: {
    id: number;
    course: string;
    graduation_date: string;
  }[];
  contact: { id: number; email: string; telegram: string };
  educations: { id: number; name: string }[];
  jobs: { id: number; name: string; experience: number }[];
  occupation: { id: number; name: string }[];
  portfolio_links: { id: number; name: string; link: string }[];
  work_format: { id: number; name: string }[];
}
