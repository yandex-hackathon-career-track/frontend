/* eslint-disable @typescript-eslint/no-misused-promises */
import Container from '@mui/material/Container/Container';
import styles from './register.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Link, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useRegisterUserMutation } from '../../services/query/practicumApi';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { IAuthForm } from '../../services/types/types';
import { defaultShema } from '../../validates/yup';
import { Popup } from '../../components/Popup/Popup';

export const Register: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    resolver: yupResolver(defaultShema),
    mode: 'onChange',
  });
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();

  const onRegister: SubmitHandler<IAuthForm> = useCallback(
    async (data) => {
      await registerUser(data);
    },
    [registerUser],
  );

  useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [isSuccess, navigate]);

  return (
    <Wrapper>
      <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px', textAlign: 'center' }}>
        Регистрация
      </Typography>
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onRegister)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              error={!!errors.email}
              label="E-mail"
              type="text"
              disabled={isLoading}
              variant="filled"
              color="primary"
              autoFocus={true}
              helperText={errors.email && errors.email.message}
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
              label="Пароль"
              type="password"
              disabled={isLoading}
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
        <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
          Зарегистрироваться
        </Button>
      </Box>
      <Container className={styles.info}>
        <Typography style={{ color: '#fff', fontSize: '14px' }}>Уже зарегистрированы?</Typography>
        <Link component={RouterLink} to={'/login'} color="primary" underline="hover" style={{ fontSize: '14px' }}>
          Войти
        </Link>
      </Container>
      {isError && (
        <Popup type="error" text={(error as { data: { detail: string } })?.data?.detail || 'Что-то пошло не так :('} />
      )}
    </Wrapper>
  );
};
