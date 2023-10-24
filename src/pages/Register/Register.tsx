/* eslint-disable @typescript-eslint/no-misused-promises */
import Container from '@mui/material/Container/Container';
import styles from './register.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Typography, Link, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useRegisterUserMutation } from '../../services/query/practicumApi';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { IAuthForm } from '../../services/types/types';

export const Register: FC = () => {
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
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onRegister: SubmitHandler<IAuthForm> = async (data) => {
    await registerUser(data);
  };

  return (
    <Wrapper heading="Регистрация">
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onRegister)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              error={errors.email && true}
              label="E-mail"
              disabled={isLoading}
              variant="filled"
              color="primary"
              autoFocus={true}
              helperText={errors.email?.message}
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
    </Wrapper>
  );
};
