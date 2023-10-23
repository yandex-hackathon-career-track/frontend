import { FC } from 'react';
import PageWithAuth from '../../PageWithAuth/PageWithAuth';
import { registerInputsSettings, registerSettings } from '../../../utils/constants';

const Registration: FC = () => {
  return <PageWithAuth inputs={registerInputsSettings} data={registerSettings} />;
};

export default Registration;
