import * as React from 'react';
import { Box, Button, Modal, IconButton } from '@mui/material';
// import { CandidateCard } from '../../componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../../services/types/Interfaces';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '534px',
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.20), 0px 8px 24px 0px rgba(176, 190, 197, 0.20)',
  p: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'end',
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
          <IconButton sx={{ p: 0 }} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
          {/* <CandidateCard isPopup {...data} /> */}
        </Box>
      </Modal>
    </div>
  );
}
