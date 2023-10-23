import bg from '../../media/BG.png';
import Container from '@mui/material/Container/Container';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Typography, Link, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useRegisterUserMutation } from '../../services/query/practicumApi';
import { ILoginForm } from '../Login/Login';

export const Register: FC = () => {
  const schema = yup
    .object({
      login: yup.string().email().required(),
      password: yup.string().min(8).max(32).required(),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onRegister: SubmitHandler<ILoginForm> = async (data) => {
    await registerUser(data);
  };

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
          Регистрация
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onRegister)}>
          <Controller
            control={control}
            name="login"
            render={({ field }) => (
              <TextField
                error={errors.login && true}
                label="Логин"
                disabled={isLoading}
                variant="filled"
                color="primary"
                autoFocus={true}
                helperText={errors.login?.message}
                fullWidth
                inputProps={{ style: { padding: '25px 12px 8px', minHeight: '50px', boxSizing: 'border-box' } }}
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: '4px', outline: '2px solid #000' },
                }}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                error={errors.password && true}
                label="Пароль"
                disabled={isLoading}
                variant="filled"
                color="primary"
                helperText={errors.password?.message}
                fullWidth
                inputProps={{ style: { padding: '25px 12px 8px', minHeight: '50px', boxSizing: 'border-box' } }}
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: '4px', outline: '2px solid #000' },
                }}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ padding: '15px', lineHeight: '20px', marginTop: '14px', textTransform: 'none', fontSize: '16px' }}
          >
            Зарегистрироваться
          </Button>
        </Box>
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
          <Typography style={{ color: '#fff', fontSize: '14px' }}>Уже зарегистрированы?</Typography>
          <Link component={RouterLink} to={'/login'} color="primary" underline="hover" style={{ fontSize: '14px' }}>
            Войти
          </Link>
        </Container>
      </Container>
    </Container>
  );
};
