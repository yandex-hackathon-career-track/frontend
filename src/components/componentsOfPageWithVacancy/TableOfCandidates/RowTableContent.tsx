import TableCell from '@mui/material/TableCell';
import { Autocomplete, Avatar, IconButton, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import tgBlue from '../../../media/telegram-blue.svg';
import ButtonCheckResume from './ButtonCheckResume';
import { ICandidate } from '../../../services/types/Interfaces';

// IMPORTANT
// нельзя использовать хуки. Библиотека которая рендерит табличку их не поддерживает (цикличная работа => некор. использование хуков)
function RowTableContent(_index: number, row: ICandidate) {
  const inputOptions = [
    { label: 'Не выбрано' },
    { label: 'Назначено собеседование' },
    { label: 'На рассмотрении' },
    { label: 'Отправлено тестовое' },
    { label: 'Отказ' },
  ];

  // TODO парсить сюда приходящее значение + check defVal
  const defVal = inputOptions.find((item: { label: string }) => item.label === 'Не выбрано') || inputOptions[0];
  const getInputBgColor = (val: string) => {
    /* TODO row.portfolio - не тот ключ, чтобы по нему проверять */
    let color = row.portfolio ? '#DDE0E4' : '#ACCCFF';
    switch (val) {
      case 'Назначено собеседование':
        color = ' #FFF9D3';
        break;
      case 'На рассмотрении':
        color = '#C2E5CE';
        break;
      case 'Отправлено тестовое':
        color = '#FFE1BD';
        break;
      case 'Отказ':
        color = 'rgba(255, 191, 253, 0.87)';
        break;
    }

    return {
      textAlign: 'left',
      borderRadius: '4px',
      backgroundColor: color,
    };
  };

  const inputValue = defVal;
  // const inputValue = inputOptions[0];

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
        {/* // TODO изменить на приходящие данные */}
        <Autocomplete
          disablePortal
          options={inputOptions}
          defaultValue={defVal}
          renderInput={(str) => <TextField {...str} sx={getInputBgColor(inputValue.label)} />}
          onChange={(_, newValue) => {
            inputValue.label = newValue?.label || 'Изменился формат данных. Поправьте код';
          }}
        />
      </TableCell>
      <TableCell align="left">
        {/* TODO row.portfolio - не тот ключ, чтобы по нему проверять */}
        {row.portfolio ? <ButtonCheckResume data={row} /> : <Typography>Отсутствует</Typography>}
      </TableCell>
    </>
  );
}

export default RowTableContent;
