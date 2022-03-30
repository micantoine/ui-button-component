import type { FC, TextareaHTMLAttributes } from 'react';
import FormLabel from './FormLabel';
import { useInputId } from '../hooks';
import { classNames } from '../utils';
import styles from './FormTextarea.module.css';

const FormTextarea: FC<TextareaHTMLAttributes<{}> & {
  label?: string;
  size?: 'small';
}> = ({ className, label, size, ...props }) => {
  const inputId = useInputId(label);

  return (
    <>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
      <textarea
        className={classNames([
          styles.textarea,
          size ? styles[size] : undefined,
          label ? styles.hasLabel : undefined,
          className
        ])}
        id={inputId}
        {...props}
      />
    </>
  );
}

export default FormTextarea;