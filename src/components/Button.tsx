import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '../utils';
import styles from './Button.module.css';
import Icon from './Icon';

type ButtonVariant = 'link' | 'icon';

const Button: FC<ButtonHTMLAttributes<{}> & {
  color?: 'primary',
  size?: 'small',
  element?: JSX.Element;
  variant?: ButtonVariant | ButtonVariant[];
}> = (props) => {
  const classes = [styles.button];

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

  // Link with Icon + Label
  let updatedChildren;
  if (!props.element && React.Children.count(props.children) > 0 && props.variant === 'link') {
    updatedChildren = React.Children.map(props.children, (child) => {
      const el = child as React.ReactElement;
      if (el?.type === Icon) {
        classes.push(styles.withIcon);
        return child;
      }
      if (!el?.type) {
        return React.createElement('span', { className: styles.label }, el);
      }
      return React.cloneElement(el, { className: styles.label});
    });
  }

  const component = props.element
    ? React.cloneElement(props.element, { className: classNames(classes) })
    : <button
      className={classNames(classes)}
      type={props.type ?? 'button'}
      form={props.form}
      onClick={props.onClick}
    >{updatedChildren || props.children}</button>;

  return (
    <>
      {component}
    </>
  )
}

export default Button