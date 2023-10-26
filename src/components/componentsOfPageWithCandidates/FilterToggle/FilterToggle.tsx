import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import styles from './FilterToggle.module.css';

interface FilterToggle {
  label: string;
}

export default function FilterToggle({ label }: FilterToggle) {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
      className={styles.filter}
      sx={{
        textTransform: 'none',
        minHeight: 56,
        '& .MuiToggleButton-root.Mui-selected': {
          backgroundColor: '#000',
        },
      }}
    >
      {label}
    </ToggleButton>
  );
}
