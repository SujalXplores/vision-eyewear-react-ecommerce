import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './spinner.module.css';

const Spinner = () => (
  <>
    <Backdrop
      className={styles.backdrop}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  </>
);

export default Spinner;
