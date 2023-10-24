/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from 'react';
import styles from './login.module.css';
import * as yup from 'yup';
import Container from '@mui/material/Container/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { useAuthUserMutation } from '../../services/query/practicumApi';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { IAuthForm } from '../../services/types/types';

export const Login: FC = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(8).max(32).required(),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    resolver: yupResolver(schema),
  });
  const [authUser, { isLoading }] = useAuthUserMutation();

  const onAuth: SubmitHandler<IAuthForm> = async (data) => {
    await authUser(data);
  };

  return (
    <Wrapper heading="Войти в аккаунт">
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onAuth)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              error={errors.email && true}
              disabled={isLoading}
              label="E-mail"
              variant="filled"
              color="primary"
              helperText={errors.email?.message}
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
              error={errors.password && true}
              disabled={isLoading}
              label="Пароль"
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
