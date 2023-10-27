/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { Autocomplete, Avatar, Button, IconButton, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import tgBlue from '../../../media/telegram-blue.svg';

import styles from './TableOfCandidates.module.css';
import { left } from '@popperjs/core';

interface Data {
  name: string;
  resume?: boolean | string;
}

interface ColumnData {
  dataKey: string;
  label: string;
  width: number;
}

const columns: ColumnData[] = [
  {
    width: 255,
    label: 'Cтудент',
    dataKey: 'student',
  },
  {
    width: 130,
    label: 'Контакты',
    dataKey: 'contacts',
  },
  {
    width: 250,
    label: 'Статус отклика',
    dataKey: 'status',
  },
  {
    width: 232,
    label: 'Резюме',
    dataKey: 'resume',
  },
];

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
  Table: (props) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
};

function TableOfCandidates() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={'left'}
          style={{ width: column.width }}
          className={styles['table-title']}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
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
        {row.resume ? (
          <Button variant="text" sx={{ p: 0, textTransform: 'none' }}>
            Просмотреть резюме
          </Button>
        ) : (
          <Typography>Отсутствует</Typography>
        )}
      </TableCell>
    </>
  );
}

export default function VirtTableOfCandidates() {
  return (
    <Paper style={{ height: 800, width: '100%' }}>
      <TableVirtuoso
        data={example}
        components={VirtuosoTableComponents}
        fixedHeaderContent={TableOfCandidates}
        itemContent={rowContent}
      />
    </Paper>
  );
}

const example = [
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
  { name: 'testMan' },
  { name: 'testMan2', resume: true },
];
const inputOptions = [
  { label: 'Назначено собеседование' },
  { label: 'На рассмотрении' },
  { label: 'Не выбрано' },
  { label: 'Отправлено тестовое' },
  { label: 'Отказ' },
  { label: 'На рассмотрении' },
];
