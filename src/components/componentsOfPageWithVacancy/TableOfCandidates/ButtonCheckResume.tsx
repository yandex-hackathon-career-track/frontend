import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CandidateCard } from '../../componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../../services/types/Interfaces';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '534px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '20px 24px',
};

export default function ButtonCheckResume({ data }: { data: ICandidate }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="text" sx={{ p: 0, textTransform: 'none' }} onClick={handleOpen}>
        Просмотреть резюме
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CandidateCard isPopup {...data} />
        </Box>
      </Modal>
    </div>
  );
}
