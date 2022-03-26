import { type FC } from 'react';
import styles from './MainContent.module.css';

const MainContent: FC = (props) => {
   return (
      <main className={styles.main}>
        {props.children}
      </main>
   );
}

export default MainContent;