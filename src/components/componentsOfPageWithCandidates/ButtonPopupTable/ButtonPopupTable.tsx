import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CandidateCard } from '../CandidateCard/CandidateCard';
import { ICandidate } from '../../../services/types/Interfaces';
import { CustomButton } from '../../../UI/CustomButton/CustomButton';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  maxWidth: '90%',
  boxShadow: 24,
  p: '10px',
};

interface IButtonPopupTable {
  data: ICandidate[];
  handleAddToCompareClick: (dataCard: ICandidate) => void;
}

export default function ButtonPopupTable({ data, handleAddToCompareClick }: IButtonPopupTable) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (data.length < 1) setOpen(false);
  }, [data]);

  return (
    <div>
      <CustomButton
        text={`Сравнить (${data.length})`}
        variant={'filled'}
        onClick={handleOpen}
        isDisable={data.length < 2}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '10px', overflow: 'auto' }}>
            {data.map((card, i) => {
              return (
                <li key={i} style={{ border: '1px solid #000', padding: '10px' }}>
                  <CandidateCard
                    isPopup
                    {...card}
                    btnAddToCompareText="Убрать из сравнений"
                    handleAddToCompareClick={() => handleAddToCompareClick(card)}
                  />
                </li>
              );
            })}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
