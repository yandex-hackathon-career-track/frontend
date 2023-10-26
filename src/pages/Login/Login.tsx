/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useCallback, useEffect } from 'react';
import styles from './login.module.css';
import Container from '@mui/material/Container/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { useAuthUserMutation } from '../../services/query/practicumApi';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { IAuthForm } from '../../services/types/types';
import { defaultShema } from '../../validates/yup';

export const Login: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    resolver: yupResolver(defaultShema),
    mode: 'onChange',
  });
  const [authUser, { isLoading, isSuccess }] = useAuthUserMutation();

  const onAuth: SubmitHandler<IAuthForm> = useCallback(
    async (data) => {
      await authUser(data);
    },
    [authUser],
  );

  useEffect(() => {
    if (isSuccess) {
      navigate('/candidates');
    }
  }, [isSuccess, navigate]);

  return (
    <Wrapper>
      <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px', textAlign: 'center' }}>
        Войти в аккаунт
      </Typography>
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onAuth)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              error={!!errors.email}
              disabled={isLoading}
              label="E-mail"
              variant="filled"
              color="primary"
              helperText={errors.email && errors.email.message}
              autoFocus={true}
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
              error={!!errors.password}
              disabled={isLoading}
              label="Пароль"
              type="password"
              variant="filled"
              color="primary"
              helperText={errors.password && errors.password.message}
              fullWidth
              inputProps={{ style: { padding: '25px 12px 8px', minHeight: '50px', boxSizing: 'border-box' } }}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', outline: '2px solid #000' },
              }}
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Link
          component={RouterLink}
          to={'/change-password'}
          color="primary"
          underline="hover"
          style={{ fontSize: '14px' }}
        >
          Забыли пароль?
        </Link>
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          color="primary"
          fullWidth
          className={styles.button}
        >
          Войти
        </Button>
      </Box>
      <Container className={styles.info}>
        <Typography style={{ color: '#fff', fontSize: '14px' }}>Еще нет аккаунта?</Typography>
        <Link component={RouterLink} to={'/register'} color="primary" underline="hover" style={{ fontSize: '14px' }}>
          Регистрация
        </Link>
      </Container>
    </Wrapper>
  );
};
