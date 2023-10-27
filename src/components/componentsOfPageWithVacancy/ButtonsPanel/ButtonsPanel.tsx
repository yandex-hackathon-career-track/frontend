import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface IButtonPanel {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonPanel: React.FC<IButtonPanel> = ({ state, setState }: IButtonPanel) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setState(newAlignment);
  };
  return (
    <ToggleButtonGroup color="primary" value={state} onChange={handleChange} exclusive>
      <ToggleButton value="активные" sx={{ textTransform: 'none' }}>
        Активные
      </ToggleButton>
      <ToggleButton value="в архиве" sx={{ textTransform: 'none' }}>
        В архиве
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ButtonPanel;
