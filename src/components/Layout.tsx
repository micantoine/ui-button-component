import { type FC } from 'react';
import { Outlet } from "react-router-dom";
import { HeaderToolbar } from './';

import styles from './Layout.module.css';

const Layout: FC = () => {
   return (
    <div>
      <HeaderToolbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
   );
}

export default Layout;