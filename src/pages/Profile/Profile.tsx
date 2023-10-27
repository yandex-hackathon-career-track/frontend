/* eslint-disable @typescript-eslint/no-misused-promises */
import Typography from '@mui/material/Typography/Typography';
import styles from './profile.module.css';
import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companyShema } from '../../validates/yup';
import { useChangeEmployerMutation } from '../../services/query/practicumApi';
import { ICompanyState, setCompanyData } from '../../services/features/companySlice';
import { useDispatch, useSelector } from '../../services/hooks';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.company);
  const [hangeEmployer, { isSuccess, data }] = useChangeEmployerMutation();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICompanyState>({
    defaultValues: form,
    resolver: yupResolver(companyShema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCompanyData(data));
    }
  }, [data, dispatch, isSuccess]);

  const onChangeProfile: SubmitHandler<ICompanyState> = useCallback(
    async (data) => {
      setIsDisabled(true);
      await hangeEmployer(data);
    },
    [hangeEmployer],
  );

  const handleEditing = useCallback(() => {
    setIsDisabled(!isDisabled);
  }, [isDisabled]);

  useEffect(() => {
    reset(form);
  }, [form, reset]);

  return (
    <Wrapper isAuth>
      <Typography variant="h1" fontSize={34} lineHeight={'normal'}>
        Компания
      </Typography>
      <Box component={'form'} className={styles.form} onSubmit={handleSubmit(onChangeProfile)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              error={!!errors.name}
              disabled={isDisabled}
              value={field.value}
              label="Название кампании"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.name && errors.name.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              error={!!errors.email}
              disabled={isDisabled}
              value={field.value}
              label="E-mail"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.email && errors.email.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <TextField
              error={!!errors.phone}
              disabled={isDisabled}
              value={field.value}
              label="Телефон"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.phone && errors.phone.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          control={control}
          name="activity"
          render={({ field }) => (
            <TextField
              error={!!errors.activity}
              disabled={isDisabled}
              value={field.value}
              label="Activity"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.activity && errors.activity.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          control={control}
          name="website"
          render={({ field }) => (
            <TextField
              error={!!errors.website}
              disabled={isDisabled}
              value={field.value}
              label="Сайт"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.website && errors.website.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Controller
          control={control}
          name="about"
          render={({ field }) => (
            <TextField
              error={!!errors.about}
              disabled={isDisabled}
              value={field.value}
              label="О компании"
              type="text"
              variant="filled"
              color="primary"
              helperText={errors.about && errors.about.message}
              fullWidth
              onChange={(e) => field.onChange(e)}
            />
          )}
        />
        <Button onClick={handleEditing}>Редактировать</Button>
        <Button disabled={isDisabled} type="submit">
          Обновить
        </Button>
      </Box>
    </Wrapper>
  );
};
