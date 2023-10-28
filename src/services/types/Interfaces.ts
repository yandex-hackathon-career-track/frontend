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

interface IPortfolio {
  name: string;
  link: string;
  thumbnail?: string;
}

export interface ICandidate {
  name: string;
  isAvailable?: boolean;
  isFavorite?: boolean;
  lastSeen?: string;
  position?: string;
  graduated?: string;
  experience?: string;
  stack?: string[];
  city?: string;
  jobFormat?: string[];
  schedule?: string[];
  portfolio?: IPortfolio[];
  certificates?: IPortfolio[];
  tg?: string;
  email?: string;
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
