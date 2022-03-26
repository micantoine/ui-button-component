import { type FC } from 'react';
import { useLocation, } from "react-router-dom";
import styles from './HeaderToolbar.module.css';

const Toolbar: FC = () => {
  const loc = useLocation();
  console.log('loc', loc);

  return (
    <div className={styles.toolbar}>
      Toolbar
    </div>
  )
}

export default Toolbar;