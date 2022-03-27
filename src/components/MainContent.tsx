import { HTMLAttributes, type FC } from 'react';
import { classNames } from '../utils';
import styles from './MainContent.module.css';

const MainContent: FC<HTMLAttributes<{}>> = ({ className, ...props }) => {
   return (
      <main className={classNames([
         styles.main,
         className ?? null
       ])} {...props}>
        {props.children}
      </main>
   );
}

export default MainContent;