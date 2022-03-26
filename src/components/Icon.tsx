import React, { useRef, type FC } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';

const SVGIcon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} {...props} />
));

const Icon: FC<Partial<SVGProps> & { src: string }> = (props) => {
  const icon = useRef<SVGElement>(null);
  const { src, ...restProps } = props;
  return (
    <SVGIcon className="icon" ref={icon} src={src} {...restProps} />
  )
}

export default Icon;