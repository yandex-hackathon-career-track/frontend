import { TextField } from '@mui/material';
import styles from './VacancyDescriptionForm.module.css';

type VacancyDescriptionForm = {
  description: string;
};

type VacancyDescriptionFormProps = VacancyDescriptionForm & {
  updateFields: (fields: Partial<VacancyDescriptionForm>) => void;
};

export function VacancyDescriptionForm({ description, updateFields }: VacancyDescriptionFormProps) {
  return (
    <>
      <label>О вакансии</label>
      <TextField
        className={styles.textfield}
        id="description"
        multiline
        required
        value={description}
        defaultValue={description}
        placeholder="Расскажите о вакансии"
        onChange={(e) => updateFields({ description: e.target.value })}
        rows={13}
      />
    </>
  );
}
