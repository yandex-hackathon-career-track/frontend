import { FC } from 'react';
import PageWithAuth from '../../PageWithAuth/PageWithAuth';
import { loginInputsSettings, loginSettings } from '../../../services/Constants';

const Login: FC = () => {
  return <PageWithAuth inputs={loginInputsSettings} data={loginSettings} />;
};

export default Login;
