import { type FC, SelectHTMLAttributes } from 'react';
import FormLabel from './FormLabel';
import { useUniqueId } from '../hooks';
import { classNames } from '../utils';
import styles from './FormSelect.module.css';

export interface SelectOption {
  value: string|number;
  label?: string;
}

const FormSelect: FC<SelectHTMLAttributes<{}> & {
  label?: string;
  useEmpty?: boolean;
  options: SelectOption[] | string[] | number[];
}> = ({ className, label, options, useEmpty, value, ...props }) => {
  const inputId = useUniqueId(label);

  let optionList: SelectOption[] = [];

  if (typeof options[0] !== 'object') {
    optionList = options.map((opt) => ({
      value: typeof opt === 'number' ? opt : opt.toString().trim()
    })) as SelectOption[];
  } else {
    optionList = options as SelectOption[];
  }
  
  return (
    <>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
      {optionList.length > 0 && <select
        className={classNames([
          styles.select,
          label ? styles.hasLabel : undefined,
          className
        ])}
        id={inputId}
        defaultValue={value}
        {...props}
      >
        {useEmpty && <option disabled></option>}
        {optionList.map((opt) =>
          <option
            key={opt.value}
            value={opt.value}
          >{opt.label ?? opt.value}{value}</option>
        )}
      </select>}
    </>
  );
}

export default FormSelect;