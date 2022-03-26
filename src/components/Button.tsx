import React, { type FC } from 'react';
import { classNames } from '../utils';
import styles from './Button.module.css'; 

const Button: FC<{
  className?: string;
  element: JSX.Element;
  iconOnly?: boolean;
}> = (props) => {
  const classes = [styles.button]

  if (props.iconOnly) {
    classes.push(styles.isIcon)
  }

  if (props.className) {
    classes.push(props.className)
  }

  const component = props.element
    ? React.cloneElement(props.element, { className: classNames(classes) })
    : <button type="button">{props.children}</button>;

  return (
    <>
      {component}
    </>
  )
}

export default Button