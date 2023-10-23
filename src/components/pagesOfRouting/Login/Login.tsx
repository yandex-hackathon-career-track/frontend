import { FC } from 'react';
import PageWithAuth from '../../PageWithAuth/PageWithAuth';
import { loginInputsSettings, loginSettings } from '../../../utils/constants';

const Login: FC = () => {
  return <PageWithAuth inputs={loginInputsSettings} data={loginSettings} />;
};

export default Login;
