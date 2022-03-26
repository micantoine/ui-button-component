import React, { type FC } from 'react';
import { classNames } from '../utils';
import styles from './Button.module.css';

type ButtonVariant = 'link' | 'icon' ;

const Button: FC<{
  className?: string;
  color?: 'primary',
  size?: 'small',
  element?: JSX.Element;
  variant?: ButtonVariant | ButtonVariant[];
  type?: 'button' | 'submit' | 'reset';
  form?: string;
}> = (props) => {
  const classes = [styles.button]

  if (props.className) {
    classes.push(props.className)
  }

  if (props.color) {
    classes.push(styles[props.color]);
  }

  if (props.size) {
    classes.push(styles[props.size]);
  }

  if (props.variant) {
    const variants = Array.isArray(props.variant) ? props.variant : props.variant.split(' ');
    variants.forEach((variant) => classes.push(styles[variant]));
  }

  const component = props.element
    ? React.cloneElement(props.element, { className: classNames(classes) })
    : <button
      className={classNames(classes)}
      type={props.type ?? 'button'}
      form={props.form}
    >{props.children}</button>;

  return (
    <>
      {component}
    </>
  )
}

export default Button