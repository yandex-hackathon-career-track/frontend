/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useCallback } from 'react';
import styles from './confirmPassword.module.css';
import Container from '@mui/material/Container/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { useResetPasswordConfirmMutation } from '../../services/query/practicumApi';
import { confirmPassShema } from '../../validates/yup';

export interface IConfirmPassword {
  uid: string;
  new_password: string;
}

export const ConfirmPassword: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IConfirmPassword>({
    resolver: yupResolver(confirmPassShema),
    mode: 'onChange',
  });
  const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation();

  const onChangePassword: SubmitHandler<IConfirmPassword> = useCallback(
    async (data) => {
      await resetPasswordConfirm(data);
    },
    [resetPasswordConfirm],
  );

  return (
    <Wrapper>
      <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px', textAlign: 'center' }}>
        Новый пароль
      </Typography>
      <Box component="form" className={styles.form} onSubmit={handleSubmit(onChangePassword)}>
        <Controller
          control={control}
          name="uid"
          render={({ field }) => (
            <TextField
              error={!!errors.uid}
              disabled={isLoading}
              label="ID из письма"
              variant="filled"
              color="primary"
              helperText={errors.uid && errors.uid.message}
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
          name="new_password"
          render={({ field }) => (
            <TextField
              error={!!errors.uid}
              disabled={isLoading}
              label="Роль"
              variant="filled"
              color="primary"
              helperText={errors.new_password && errors.new_password.message}
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
          Сохранить
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
