import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useUpdVacanciToIdMutation } from '../../../services/query/practicumApi';
import { IVacanci } from '../../../services/types/Interfaces';

export default function ButtonMenu({
  data,
  handleChangeStatus,
}: {
  data: IVacanci;
  handleChangeStatus: (newData: IVacanci) => void;
}) {
  const [updVacanciToIdMutation, { data: newData }] = useUpdVacanciToIdMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const toggleVacanciStatus = (event: React.MouseEvent<HTMLElement>) => {
    void updVacanciToIdMutation({ id: data.id, parametrs: { is_published: false } });
    handleClose(event);
  };

  React.useEffect(() => {
    if (newData) {
      // data = { ...data, is_published: newData?.is_published || data.is_published };
      handleChangeStatus(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 0 }}>
          <MenuItem onClick={handleClose} sx={{ '&:hover': { bgcolor: '#F1F6FF' } }}>
            {'Редактировать'}
          </MenuItem>
          <MenuItem onClick={toggleVacanciStatus} sx={{ '&:hover': { bgcolor: '#F1F6FF' } }}>
            {'В архив'}
          </MenuItem>
        </Box>
      </Popover>
    </div>
  );
}
