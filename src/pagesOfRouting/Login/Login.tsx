import { FC } from 'react';
import { loginInputsSettings, loginSettings } from '../../services/Constants';
import PageWithAuth from '../../components/PageWithAuth/PageWithAuth';

const Login: FC = () => {
  return <PageWithAuth inputs={loginInputsSettings} data={loginSettings} />;
};

export default Login;
