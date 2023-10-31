import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <Box className={styles.loader}>
      <CircularProgress color="inherit" />
    </Box>
  );
}
