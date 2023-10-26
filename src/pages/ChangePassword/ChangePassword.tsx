/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useCallback, useEffect } from 'react';
import styles from './changePassword.module.css';
import Container from '@mui/material/Container/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { useResetPasswordMutation } from '../../services/query/practicumApi';
import { changePassShema } from '../../validates/yup';

export interface IChangePassword {
  email: string;
}

export const ChangePassword: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    resolver: yupResolver(changePassShema),
    mode: 'onChange',
  });
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const onChangePassword: SubmitHandler<IChangePassword> = useCallback(
    async (data) => {
      await resetPassword(data.email);
    },
    [resetPassword],
  );

  useEffect(() => {
    if (isSuccess) navigate('/confirm-password');
  }, [isSuccess, navigate]);

  return (
    <Wrapper>
      <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px', textAlign: 'center' }}>
        Восстановление пароля
      </Typography>
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onChangePassword)}>
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
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          color="primary"
          fullWidth
          className={styles.button}
        >
          Подтвердить
        </Button>
      </Box>
      <Container className={styles.info}>
        <Typography style={{ color: '#fff', fontSize: '14px' }}>Вспомнили пароль?</Typography>
        <Link component={RouterLink} to={'/login'} color="primary" underline="hover" style={{ fontSize: '14px' }}>
          Войти
        </Link>
      </Container>
    </Wrapper>
  );
};
