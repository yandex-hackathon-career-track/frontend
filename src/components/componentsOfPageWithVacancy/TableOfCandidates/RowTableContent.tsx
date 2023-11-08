import TableCell from '@mui/material/TableCell';
import { Autocomplete, Avatar, TextField, Typography, Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import tgBlue from '../../../media/telegram-blue.svg';
import ButtonCheckResume from './ButtonCheckResume';
import { IDataChangeStatusFunc, IRespondDataOfVacanci } from '../../../services/types/Interfaces';

// IMPORTANT
// нельзя использовать хуки. Библиотека которая рендерит табличку их не поддерживает (цикличная работа => некор. использование хуков)
function RowTableContent(
  _index: number,
  row: IRespondDataOfVacanci & {
    handleChange: (data: IDataChangeStatusFunc) => void;
    portfolio: boolean;
  },
) {
  const inputOptions = [
    { label: 'Не выбрано', id: 0 },
    { label: 'На рассмотрении', id: 1 },
    { label: 'Отправлено тестовое', id: 2 },
    { label: 'Назначено собеседование', id: 3 },
    { label: 'Отказ', id: 4 },
  ];

  // TODO парсить сюда приходящее значение + check defVal
  const defVal = inputOptions.find((item: { label: string }) => item.label === row.status.name) || inputOptions[0];
  const getInputBgColor = (val: string) => {
    // TODO надо бы это вынести на бэк - цвета к статусам
    let color = '';
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
      case 'Не выбрано':
        color = row.portfolio ? '#DDE0E4' : '#ACCCFF';
        break;
    }

    return {
      textAlign: 'left',
      borderRadius: '4px',
      backgroundColor: color,
    };
  };

  const inputValue = { ...defVal };
  const name = row.applicant.first_name + ' ' + row.applicant.last_name;

  return (
    <>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Avatar
            alt={name}
            src="https://mediabrest.by/system/Cover/images/000/059/736/medium/zhivodera-iz-mozyrya-otpravyat-v-psihiatricheskuyu-bolnitsu_1561616899.jpg"
          />
          <Typography>{name}</Typography>
        </div>
      </TableCell>
      <TableCell align="center">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link
            style={{ backgroundImage: `url(${tgBlue})`, width: 24, height: 24 }}
            target="_blank"
            href={`https://t.me/${row.applicant.telegram.slice(1)}`}
          />
          <Link
            href={`mailto:${row.applicant.email}`}
            target="_blanc"
            style={{ width: 24, height: 24, color: '#B5B5B7' }}
          >
            <MailOutlineIcon />
          </Link>
        </div>
      </TableCell>
      <TableCell align="center">
        <Autocomplete
          disablePortal
          options={inputOptions}
          value={inputValue}
          // т.к. value - объект, а js не умеет их сравнивать, нужно явно ему объяснить, какие объекты считать равными, т.е. как сопоставлять value & options
          isOptionEqualToValue={(option, value) => option.label === value.label && option.id === value.id}
          renderInput={(str) => <TextField {...str} sx={getInputBgColor(inputValue.label)} />}
          onChange={(_, newValue) => {
            const val = newValue || inputOptions[0];
            // +1 для стыковки с БД. Это нужно поправить TODO
            row.handleChange({ status: val.id + 1, respondId: row.id });
          }}
        />
      </TableCell>
      <TableCell align="left">{row.portfolio ? <ButtonCheckResume /> : <Typography>Отсутствует</Typography>}</TableCell>
    </>
  );
}

export default RowTableContent;
