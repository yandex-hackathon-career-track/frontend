import TableCell from '@mui/material/TableCell';
import { Autocomplete, Avatar, IconButton, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import tgBlue from '../../../media/telegram-blue.svg';
import { left } from '@popperjs/core';
import ButtonCheckResume from './ButtonCheckResume';
import { ICandidate } from '../../../services/types/Interfaces';

const inputOptions = [
  { label: 'Назначено собеседование' },
  { label: 'На рассмотрении' },
  { label: 'Не выбрано' },
  { label: 'Отправлено тестовое' },
  { label: 'Отказ' },
  { label: 'На рассмотрении' },
];

function RowTableContent(_index: number, row: ICandidate) {
  return (
    <>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Avatar
            alt={row.name}
            src="https://mediabrest.by/system/Cover/images/000/059/736/medium/zhivodera-iz-mozyrya-otpravyat-v-psihiatricheskuyu-bolnitsu_1561616899.jpg"
          />
          <Typography>{row.name}</Typography>
        </div>
      </TableCell>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <IconButton style={{ backgroundImage: `url(${tgBlue})`, width: 24, height: 24 }}></IconButton>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
        </div>
      </TableCell>
      <TableCell align="center">
        <Autocomplete
          disablePortal
          options={inputOptions}
          renderInput={(str) => <TextField {...str} sx={{ textAlign: left }} placeholder={'Не выбрано'} />}
          sx={{ width: 250 }}
        />
      </TableCell>
      <TableCell align="left">
        {row.portfolio ? <ButtonCheckResume data={row} /> : <Typography>Отсутствует</Typography>}
      </TableCell>
    </>
  );
}

export default RowTableContent;
