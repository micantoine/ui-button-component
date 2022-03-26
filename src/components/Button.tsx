import React, { type FC } from 'react';
import { classNames } from '../utils';
import styles from './Button.module.css';

type ButtonVariant = 'link' | 'primary' | 'small';

const Button: FC<{
  className?: string;
  element?: JSX.Element;
  iconOnly?: boolean;
  variant?: ButtonVariant | ButtonVariant[];
}> = (props) => {
  const classes = [styles.button]

  if (props.iconOnly) {
    classes.push(styles.isIcon)
  }

  if (props.className) {
    classes.push(props.className)
  }
  
  if (props.variant) {
    const variants = Array.isArray(props.variant) ? props.variant : props.variant.split(' ');
    variants.forEach((variant) => classes.push(styles[variant]));
  }

  const component = props.element
    ? React.cloneElement(props.element, { className: classNames(classes) })
    : <button className={classNames(classes)} type="button">{props.children}</button>;

  return (
    <>
      {component}
    </>
  )
}

export default Button