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
import { IDataChangeStatusFunc, IRespondsOfVacanci } from '../../../services/types/Interfaces';
import { useChangeStatusVacanciToIdMutation } from '../../../services/query/practicumApi';
import { useDispatch } from '../../../services/hooks';
import { setNewStatsToId } from '../../../services/features/selectedVacancySlice';

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

export default function TableOfCandidates({ dataResponds }: { dataResponds: IRespondsOfVacanci }) {
  const dispatch = useDispatch();
  const [changeStatusVacanciToId, { data }] = useChangeStatusVacanciToIdMutation();

  const handleChangeStatus = (data: IDataChangeStatusFunc) => {
    void changeStatusVacanciToId({ ...data, vacanciId: dataResponds.id });
  };

  React.useEffect(() => {
    if (data) {
      dispatch(setNewStatsToId(data));
    }
  }, [data, dispatch]);

  // TODO: проверка на портфолио - поправить. Убрать статичное false
  const modResponds = [...dataResponds.responds].map((item) => ({
    ...item,
    handleChange: handleChangeStatus,
    portfolio: false,
  }));

  return (
    <Paper style={{ height: 800, width: '100%' }}>
      <TableVirtuoso
        data={modResponds}
        components={VirtuosoTableComponents}
        fixedHeaderContent={HeaderOfTableOfCandidates}
        itemContent={RowTableContent}
      />
    </Paper>
  );
}
