import * as React from 'react';
import { getCellClass, getCellContent, parametrs } from './utils';
import { CustomButton } from '../../CustomButton/CustomButton';
import { Table, TableBody, IconButton, TableCell, TableContainer, TableRow, Typography, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ButtonPopupTable.module.css';
import { IApplicantsToDetail } from '../../../services/types/types';

interface IButtonPopupTable {
  data: IApplicantsToDetail[];
  handleAddToCompareClick: (dataCard: IApplicantsToDetail) => void;
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <Typography className={styles.title}>Сравнение кандидатов</Typography>
            <IconButton sx={{ p: 0 }} onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
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
