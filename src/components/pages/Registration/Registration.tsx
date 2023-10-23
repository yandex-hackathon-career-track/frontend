import { FC } from 'react';
import PageWithAuth from '../../PageWithAuth/PageWithAuth';
import { registerInputsSettings, registerSettings } from '../../../services/Constants';

const Registration: FC = () => {
  return <PageWithAuth inputs={registerInputsSettings} data={registerSettings} />;
};

export default Registration;
