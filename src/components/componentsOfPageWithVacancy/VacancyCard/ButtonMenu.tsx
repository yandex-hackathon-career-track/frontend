import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <MenuItem onClick={handleClose} sx={{ '&:hover': { bgcolor: '#F1F6FF' } }}>
            {'В архив'}
          </MenuItem>
        </Box>
      </Popover>
    </div>
  );
}
