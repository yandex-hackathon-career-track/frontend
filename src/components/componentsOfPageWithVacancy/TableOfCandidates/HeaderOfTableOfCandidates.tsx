import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from './HeaderOfTableOfCandidates.module.css';

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
    width: 320,
    label: 'Статус отклика',
    dataKey: 'status',
  },
  {
    width: 232,
    label: 'Резюме',
    dataKey: 'resume',
  },
];

function HeaderOfTableOfCandidates() {
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

export default HeaderOfTableOfCandidates;
