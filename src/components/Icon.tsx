import React, { useRef, type FC } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import styles from './Icon.module.css';
import { classNames } from '../utils';

const SVGIcon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} {...props} />
));

const Icon: FC<Partial<SVGProps> & { src: string }> = (props) => {
  const icon = useRef<SVGElement>(null);
  const { src, className, ...restProps } = props;

  const classes = [styles.icon];
  if (className) classes.push(className);

  return (
    <SVGIcon className={classNames(classes)} ref={icon} src={src} {...restProps} />
  )
}

export default Icon;