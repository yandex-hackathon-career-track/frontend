import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styles from './FilterDropped.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface IFilterDropper {
  data: string[];
  label: string;
  state?: string[];
  setState?: (newVal: string[]) => void;
}

export default function FilterDropper({ data, label, state = [], setState = () => null }: IFilterDropper) {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#797981',
            },
            '& MuiOutlinedInput-root.MuiAutocomplete-input': {
              padding: 0,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        multiple
        options={data}
        value={state}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option}
          </li>
        )}
        className={styles.filter}
        renderInput={(params) => <TextField {...params} label={label} placeholder="" />}
        onChange={(_, newValue) => setState(newValue)}
      />
    </ThemeProvider>
  );
}
