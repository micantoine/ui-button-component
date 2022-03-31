import type { LabelHTMLAttributes, FC } from 'react';
import { classNames } from '../utils';
import styles from './FormLabel.module.css';

const FormLabel: FC<LabelHTMLAttributes<{}>> = ({ className, ...props }) => {
  return (
    <label className={classNames([styles.label, className])} {...props}>
      {props.children}
    </label>
  );
}

export default FormLabel;