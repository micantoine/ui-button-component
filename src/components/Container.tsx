import React, { HTMLAttributes, type FC } from 'react';
import { classNames } from '../utils';
import styles from './Container.module.css';

type ContainerSpacing = 'small' | 'medium';
interface ContainerProps {
  horizontal?: boolean;
  vertical?: boolean;
  spacing?: ContainerSpacing;
  xSpacing?: ContainerSpacing;
  ySpacing?: ContainerSpacing;
  size?: 'sm' | 'md' | 'lg';
  tagName?: keyof HTMLElementTagNameMap
}

const Container: FC<HTMLAttributes<{}> & ContainerProps> = ({
  className,
  vertical = true,
  horizontal = true,
  spacing = 'medium',
  xSpacing,
  ySpacing,
  size,
  tagName = 'div',
  children,
  ...props
}) => {
  const classes = [className];

  if (vertical) {
    classes.push(styles.containerY);
  }
  if (horizontal) {
    classes.push(styles.containerX);
  }

  if (spacing) {
    classes.push(styles[`spacing-${spacing}`]);
  }
  if (xSpacing) {
    classes.push(styles[`spacingX-${xSpacing}`]);
  }
  if (ySpacing) {
    classes.push(styles[`spacingY-${ySpacing}`]);
  }

  if (size) {
    classes.push(styles[size]);
  }

  const element = React.createElement(
    tagName,
    {
      className: classNames(classes),
      ...props
    },
    children
  );

  return element;
}

export default Container;