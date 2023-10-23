import { TextField } from '@mui/material';
import { FC } from 'react';

interface IInputBlockAuth {
  labelText: string;
  focus?: boolean;
}

const InputBlockAuth: FC<IInputBlockAuth> = ({ labelText, focus = false }) => {
  return (
    <TextField
      label={labelText}
      variant="filled"
      color="primary"
      autoFocus={focus}
      fullWidth
      inputProps={{ style: { padding: '25px 12px 8px', minHeight: '50px', boxSizing: 'border-box' } }}
      InputProps={{
        style: { backgroundColor: '#fff', borderRadius: '4px', outline: '2px solid #000' },
      }}
    />
  );
};

export default InputBlockAuth;
