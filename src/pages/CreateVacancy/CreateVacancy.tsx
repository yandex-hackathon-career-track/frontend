/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, FormEvent, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useMultistepForm } from '../../services/hooks/useMultistepForm';
import { VacancyForm } from '../../components/VacancyForm/VacancyForm';
import { VacancyDescriptionForm } from '../../components/VacancyDescriptionForm/VacancyDescriptionForm';
import { useCreateVacancyMutation } from '../../services/query/practicumApi';
import { Popup } from '../../components/Popup/Popup';
import { ERROR_TEXT, SUCCESS_TEXT } from '../../utils/constants';
import { useSelector } from '../../services/hooks';
import styles from './CreateVacancy.module.css';
import Loader from '../../components/Loader/Loader';

export type TFormData = {
  title: string;
  attendance: number;
  occupation: number;
  description: string;
  min_salary: number;
  max_salary: number;
  city: number;
};

const INITIAL_DATA: TFormData = {
  title: '',
  attendance: 0,
  occupation: 0,
  description: '',
  min_salary: 0,
  max_salary: 0,
  city: 0,
};

export const CreateVacancy: FC = () => {
  const [createVacancy, { isSuccess, isError, isLoading }] = useCreateVacancyMutation();
  const [data, setData] = useState(INITIAL_DATA);
  const selectOptions = useSelector((store) => store.attributes);

  function updateFields(fields: Partial<TFormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <VacancyForm {...data} options={selectOptions} updateFields={updateFields} key={1} />,
    <VacancyDescriptionForm {...data} updateFields={updateFields} key={2} />,
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    await createVacancy(data);
  }

  useEffect(() => {
    if (isSuccess) {
      setData(INITIAL_DATA);
      back();
    }
  }, [isSuccess, back]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={styles.headingCcontainer}>
        <Typography variant="h1" className={styles.heading}>
          Создание вакансии
        </Typography>
        <Typography variant="body1" className={styles.subheading}>
          Подробное описание вакансии помогает нам найти идеального кандидата для вас
        </Typography>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formContent}>{step}</div>
        <div className={styles.navigation}>
          <div className={styles.controls}>
            <div className={`${styles.stepbar} ${isFirstStep && styles.stepbarActive}`} onClick={back}></div>
            <button
              className={`${styles.button} ${styles.buttonBack}`}
              type="button"
              disabled={isFirstStep}
              onClick={back}
            >
              Назад
            </button>
          </div>
          <div className={`${styles.controls} ${styles.controlsRight}`}>
            <div className={`${styles.stepbar} ${isLastStep && styles.stepbarActive}`}></div>
            <button className={`${styles.button} ${styles.buttonSubmit}`} type="submit">
              {isLastStep ? 'Создать вакансию' : 'Далее'}
            </button>
          </div>
        </div>
      </form>
      {isError && <Popup type="error" text={`${ERROR_TEXT.onSaveError}`} />}
      {isSuccess && <Popup type="done" text={`${SUCCESS_TEXT.onSave}`} />}
    </>
  );
};
