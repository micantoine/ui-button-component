import type { FC, SelectHTMLAttributes } from 'react';
import FormLabel from './FormLabel';
import { classNames, kebabCase } from '../utils';
import styles from './FormSelect.module.css';

export interface SelectOption {
  value: string|number;
  label?: string;
}

const FormSelect: FC<SelectHTMLAttributes<{}> & {
  label?: string;
  useEmpty?: boolean;
  options: SelectOption[];
}> = ({ className, label, id, options, useEmpty, ...props }) => {
  const inputId = kebabCase(id ?? label);

  return (
    <>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
      <select
        className={classNames([
          styles.select,
          label ? styles.hasLabel : undefined,
          className
        ])}
        id={inputId}
        {...props}
      >
        {useEmpty && <option></option>}
        {options && options.map((opt) =>
          <option
            key={kebabCase(opt.value.toString())}
            value={opt.value}
            selected={opt.value === props.value}
          >{opt.label ?? opt.value}</option>
        )}
      </select>
    </>
  );
}

export default FormSelect;