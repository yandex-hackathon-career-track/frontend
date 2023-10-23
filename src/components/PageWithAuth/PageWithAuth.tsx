import { Button, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Импортируем Link из React Router
import { FC } from 'react';
import bg from '../../media/BG.png';
import InputBlockAuth from '../InputBlockAuth/InputBlockAuth';
import { IAuthSettings, IInputsSettings } from '../../services/types/Interfaces';

interface IPageWithAuth {
  data: IAuthSettings;
  inputs: IInputsSettings;
}

const PageWithAuth: FC<IPageWithAuth> = ({ data, inputs }) => {
  return (
    <Container
      maxWidth={false}
      style={{ padding: 0 }}
      sx={{
        backgroundColor: '#000',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        minHeight: '100vh',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth={false}
        style={{ padding: 0 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,

          width: '100%',
          maxWidth: '250px',
          m: 0,
        }}
      >
        <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px' }}>
          {data.title}
        </Typography>
        {inputs.email ? <InputBlockAuth labelText="E-mail" focus /> : <></>}
        {inputs.password ? <InputBlockAuth labelText="Пароль" /> : <></>}
        {inputs.repeatPassword ? <InputBlockAuth labelText="Повторите пароль" /> : <></>}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ padding: '15px', lineHeight: '20px', marginTop: '14px', textTransform: 'none', fontSize: '16px' }}
        >
          {data.btnText}
        </Button>
        <Container
          style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            columnGap: '10px',
          }}
        >
          <Typography style={{ color: '#fff', fontSize: '14px' }}>{data.subTitleText}</Typography>
          <Link component={RouterLink} to={data.path} color="primary" underline="hover" style={{ fontSize: '14px' }}>
            {data.linkText}
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default PageWithAuth;
