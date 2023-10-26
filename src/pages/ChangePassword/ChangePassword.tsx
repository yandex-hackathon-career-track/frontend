/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from 'react';
import styles from './changePassword.module.css';
import * as yup from 'yup';
import Container from '@mui/material/Container/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { useChangePasswordMutation } from '../../services/query/practicumApi';

export interface IChangePassword {
  email: string;
}

export const ChangePassword: FC = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    resolver: yupResolver(schema),
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onChangePassword: SubmitHandler<IChangePassword> = async (data) => {
    await changePassword(data);
  };

  return (
    <Wrapper heading="Восстановление пароля">
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
          Войти
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
