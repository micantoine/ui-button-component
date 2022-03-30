import type { HtmlHTMLAttributes, FC } from 'react';
import { classNames } from '../utils';

import styles from './Spinner.module.css';

const Spinner: FC<HtmlHTMLAttributes<{}>> = ({ className, ...props }) => {
  return <div className={classNames([
    styles.spinner,
    className
  ])} {...props} />
}

export default Spinner;