import { type InputHTMLAttributes, type FC } from 'react';
import FormLabel from './FormLabel';
import { useInputId } from '../hooks';
import { classNames } from '../utils';
import styles from './FormInput.module.css';

const FormInput: FC<InputHTMLAttributes<{}> & {
  label?: string;
}> = ({ className, label, ...props }) => {
  const inputId = useInputId(label);

  return (
    <>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
      <input
        className={classNames([
          styles.input,
          label ? styles.hasLabel : undefined,
          className
        ])}
        id={inputId}
        {...props}
      />
    </>
  );
}

export default FormInput;