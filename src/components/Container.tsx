import { HTMLAttributes, type FC } from 'react';
import { classNames } from '../utils';
import styles from './Container.module.css';

interface ContainerProps {
  spacing?: 'small' | 'medium';
  horizontal?: boolean;
  vertical?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Container: FC<HTMLAttributes<{}> & ContainerProps> = ({
  className,
  vertical = true,
  horizontal = true,
  spacing = 'medium',
  size,
  ...props
}) => {
  const classes = [className];

  if (vertical && horizontal) {
    classes.push(styles.containerXY);
  } else if (vertical) {
    classes.push(styles.containerY);
  } else if (horizontal) {
    classes.push(styles.containerX);
  }

  if (spacing) {
    classes.push(styles[`spacing-${spacing}`])
  }

  if (size) {
    classes.push(styles[size]);
  }

  return (
    <div className={classNames(classes)} {...props}>
      {props.children}
    </div>
  );
}

export default Container;