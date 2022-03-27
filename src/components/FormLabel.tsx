import { LabelHTMLAttributes, type FC } from 'react';

const FormLabel: FC<LabelHTMLAttributes<{}>> = (props) => {
  return (
    <label {...props}>{props.children}</label>
  );
}

export default FormLabel;