import { type FC, SelectHTMLAttributes } from 'react';
import FormLabel from './FormLabel';
import { useInputId } from '../hooks';
import { classNames, kebabCase } from '../utils';
import styles from './FormSelect.module.css';

export interface SelectOption {
  value: string|number;
  label?: string;
}

const FormSelect: FC<SelectHTMLAttributes<{}> & {
  label?: string;
  useEmpty?: boolean;
  options: SelectOption[] | string[] | number[];
}> = ({ className, label, id, options, useEmpty, ...props }) => {

  const inputId = useInputId({id, label});

  let optionList: SelectOption[];

  if (typeof options[0] !== 'object') {
    optionList = options.map((opt) => ({ value: opt })) as SelectOption[];
  } else {
    optionList = options as SelectOption[];
  }

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
        {useEmpty && <option disabled></option>}
        {optionList && optionList.map((opt) =>
          <option
            key={kebabCase(opt.value?.toString())}
            value={opt.value}
          >{opt.label ?? opt.value}</option>
        )}
      </select>
    </>
  );
}

export default FormSelect;