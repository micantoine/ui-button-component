import type { HTMLAttributes, FC } from 'react';
import { classNames } from '../utils';
import styles from './Tip.module.css';

const Tip: FC<HTMLAttributes<{}> & {
  size?: 'small' | 'large';
  color?: 'danger' | 'success';
}> = ({ className, color, size, ...props }) => {
  let classes = [styles.tip, className];
  
  if (color) {
    classes.push(styles[color]);
  }

  if (size) {
    classes.push(styles[size]);
  }
  
  return (
    <span className={classNames(classes)} {...props}>
      {props.children}
    </span>
  );
}

export default Tip;