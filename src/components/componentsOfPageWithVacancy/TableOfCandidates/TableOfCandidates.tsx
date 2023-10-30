import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import RowTableContent from './RowTableContent';
import HeaderOfTableOfCandidates from './HeaderOfTableOfCandidates';
import { profiles } from '../../../utils/mockData';

// import { useSelector } from '../../../services/hooks';

export interface Data {
  name: string;
  resume?: boolean | string;
}

type VirtuosoTableComponentsType = {
  Scroller: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
  Table: React.FC;
  TableHead: React.FC;
  TableRow: React.FC;
  TableBody: React.ForwardRefExoticComponent<React.RefAttributes<HTMLTableSectionElement>>;
};

const VirtuosoTableComponents: VirtuosoTableComponentsType = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
  Table: (props) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
  TableHead,
  TableRow: (props) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
};

VirtuosoTableComponents.Scroller.displayName = 'VirtuosoTableScroller';
VirtuosoTableComponents.TableBody.displayName = 'VirtuosoTableBody';

export const inputOptions = [
  { label: 'Не выбрано' },
  { label: 'Назначено собеседование' },
  { label: 'На рассмотрении' },
  { label: 'Отправлено тестовое' },
  { label: 'Отказ' },
];

// TODO не могу прокинуть статусы фильтров, подкапотный запрет на хуки. Нужно покопаться в доке
// ! Попробовать хукать здесь, экспортировать статичные данные: список и функцию обработки, а в строке импортировать
export default function TableOfCandidates() {
  // const attributes = useSelector((store) => store.attributes);
  return (
    <Paper style={{ height: 800, width: '100%' }}>
      <TableVirtuoso
        data={profiles}
        components={VirtuosoTableComponents}
        fixedHeaderContent={HeaderOfTableOfCandidates}
        itemContent={RowTableContent}
      />
    </Paper>
  );
}
