import { type FC } from 'react';

import Breadcrumb from './Breadcrumb';
import styles from './HeaderToolbar.module.css';

const Toolbar: FC = () => {  
  return (
    <div className={styles.toolbar}>
      <Breadcrumb />
    </div>
  )
}

export default Toolbar;