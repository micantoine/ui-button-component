import { type FC } from 'react';
import style from './PageTitle.module.css';

const PageTitle: FC = (props) => {
  return (
    <h1 className={style.title}>{props.children}</h1>
  );
}

export default PageTitle;