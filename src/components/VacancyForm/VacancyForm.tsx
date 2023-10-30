import { TextField } from '@mui/material';
import FilterDropper from '../componentsOfPageWithCandidates/FilterDropped/FilterDropped';
import styles from './VacancyForm.module.css';

type VacancyData = {
  title: string;
  is_published: boolean;
  attendance: string;
  occupation: string;
  min_salary: number | string;
  max_salary: number | string;
  city: string;
};

type VacancyFormProps = VacancyData & {
  updateFields: (fields: Partial<VacancyData>) => void;
};

const attendanceData = ['В офисе', 'Удаленно', 'Гидрид'];
const cityData = ['Москва', 'Токио', 'Берлин'];
const occupationData = ['Полный день', 'Неполный день', 'Гибрид'];

export function VacancyForm({
  title,
  attendance,
  occupation,
  min_salary,
  max_salary,
  city,
  updateFields,
}: VacancyFormProps) {
  return (
    <>
      <label>Должность</label>
      <TextField
        className={styles.textfield}
        value={title}
        required
        placeholder="Напишите название вашей вакансии"
        type="text"
        fullWidth
        onChange={(e) => updateFields({ title: e.target.value })}
      />
      <label>Формат работы</label>
      <FilterDropper
        data={attendanceData}
        value={attendance}
        isRequired={true}
        isMultiply={true}
        label="Выберите формат"
        handleChange={(e) => updateFields({ attendance: e.target.value })}
      />
      <label>Локация</label>
      <FilterDropper
        data={cityData}
        value={city}
        label="Выберите город"
        handleChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Занятость</label>
      <FilterDropper
        data={occupationData}
        value={occupation}
        isMultiply={true}
        label="Выберите тип занятости"
        handleChange={(e) => updateFields({ occupation: e.target.value })}
      />
      <label>Зарплата</label>
      <div className={styles.salaryContainer}>
        <TextField
          className={styles.textfield}
          value={min_salary}
          required
          placeholder="От"
          type="number"
          fullWidth
          onChange={(e) => updateFields({ min_salary: +e.target.value })}
        />
        <TextField
          className={styles.textfield}
          value={max_salary}
          required
          placeholder="До"
          type="number"
          fullWidth
          onChange={(e) => updateFields({ max_salary: +e.target.value })}
        />
      </div>
    </>
  );
}
