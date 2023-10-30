import { Autocomplete, Checkbox, TextField } from '@mui/material';
import { IAllAttributes } from '../../services/types/types';
import styles from './VacancyForm.module.css';
import { TFormData } from '../../pages/CreateVacancy/CreateVacancy';

type VacancyFormProps = TFormData & {
  updateFields: (fields: Partial<TFormData>) => void;
  options: IAllAttributes;
};

export function VacancyForm({ title, min_salary, max_salary, options, updateFields }: VacancyFormProps) {
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
      <Autocomplete
        options={options.work_formats}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.id}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} placeholder={`${options.work_formats[0].name}`} />}
        onChange={(_, newValue) => updateFields({ attendance: newValue?.id })}
      />
      <label>Локация</label>
      <Autocomplete
        options={options.cities}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.id}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} placeholder={`${options.cities[0].name}`} />}
        onChange={(_, newValue) => updateFields({ city: newValue?.id })}
      />
      <label>Занятость</label>
      <Autocomplete
        options={options.occupations}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.id}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} placeholder={`${options.occupations[0].name}`} />}
        onChange={(_, newValue) => updateFields({ occupation: newValue?.id })}
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
