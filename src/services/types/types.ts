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

export interface IAllAttributes {
  directions: [{ id: number; name: string }];
  cources: [
    {
      id: number;
      name: string;
      direction: {
        id: number;
        name: string;
      };
    },
  ];
  stack: [{ id: number; name: string }];
  work_formats: [{ id: number; name: string }];
  occupations: [{ id: number; name: string }];
  cities: [{ id: number; name: string }];
  activity_statuses: [{ id: number; name: string }];
  review_statuses: [{ id: number; name: string }];
}

interface IApplicant {
  id: string;
  user: string;
  first_name: string;
  last_name: string;
  stack: [{ id: number; name: string }];
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
