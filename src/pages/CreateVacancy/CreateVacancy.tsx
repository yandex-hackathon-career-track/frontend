import { FC, FormEvent, useState } from 'react';
import { Typography } from '@mui/material';
import { useMultistepForm } from '../../services/hooks/useMultistepForm';
import { VacancyForm } from '../../components/VacancyForm/VacancyForm';
import { VacancyDescriptionForm } from '../../components/VacancyDescriptionForm/VacancyDescriptionForm';
import styles from './CreateVacancy.module.css';

export const CreateVacancy: FC = () => {
  type FormData = {
    title: string;
    is_published: boolean;
    attendance: string;
    occupation: string;
    description: string;
    min_salary: number | null;
    max_salary: number | null;
    city: string;
  };

  const INITIAL_DATA: FormData = {
    title: '',
    is_published: true,
    attendance: '',
    occupation: '',
    description: '',
    min_salary: null,
    max_salary: null,
    city: '',
  };

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <VacancyForm {...data} updateFields={updateFields} key={1} />,
    <VacancyDescriptionForm {...data} updateFields={updateFields} key={2} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
  }
  return (
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
    </>
  );
};
