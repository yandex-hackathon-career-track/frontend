import { Button } from '@mui/material';

interface IBtnInTable {
  variant: 'outlined' | 'contained';
  text: string;
  onClick: () => void;
}

const BtnInTable: React.FC<IBtnInTable> = ({ variant, text, onClick }: IBtnInTable) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={{
        p: '10px 20px',
        textTransform: 'none',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '20px',
      }}
    >
      {text}
    </Button>
  );
};

export default BtnInTable;
