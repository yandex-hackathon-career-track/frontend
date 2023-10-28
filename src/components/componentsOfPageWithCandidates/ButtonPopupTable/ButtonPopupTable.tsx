import * as React from 'react';
import Modal from '@mui/material/Modal';
import { ICandidate } from '../../../services/types/Interfaces';
import { CustomButton } from '../../../UI/CustomButton/CustomButton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import styles from './ButtonPopupTable.module.css';
import { getCellClass, getCellContent, parametrs } from './utils';

interface IButtonPopupTable {
  data: ICandidate[];
  handleAddToCompareClick: (dataCard: ICandidate) => void;
}

export default function ButtonPopupTable({ data, handleAddToCompareClick }: IButtonPopupTable) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (data.length < 1) setOpen(false);
  }, [data]);

  return (
    <div>
      <CustomButton
        text={`Сравнить (${data.length})`}
        variant={'filled'}
        onClick={handleOpen}
        isDisable={data.length < 2}
      />
      <Modal open={open} onClose={handleClose} sx={{ bgcolor: 'rgba(0, 0, 0, 0.4)' }}>
        <div className={styles['modal-box']}>
          <Typography className={styles.title}>Сравнение кандидатов</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {Object.keys(parametrs).map((property) => (
                  <TableRow key={property}>
                    <TableCell component="th" scope="row" className={getCellClass(property)}>
                      {(parametrs as Record<string, string>)[property]}
                    </TableCell>
                    {data.map((row, i) => (
                      <TableCell key={i} className={getCellClass(property)} sx={{ p: '14px 25px' }}>
                        {getCellContent(property, row, handleAddToCompareClick)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Modal>
    </div>
  );
}
