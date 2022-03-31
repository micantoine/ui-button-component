import { type FC, useState } from 'react';
import FormLabel from './FormLabel';
import { classNames } from '../utils';
import styles from './FormToggle.module.css';

const FormInput: FC<{
  name?: string;
  label?: string;
  value?: boolean;
  trueValue?: string;
  falseValue?: string;
  onChange?: (payload: boolean) => void;
}> = ({ label, name, trueValue, falseValue, value = false, onChange }) => {
  const [status, setStatus] = useState(value)

  const changeStatus = (state: boolean) => {
    setStatus(state);
    if (onChange) onChange(state);
  }

  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <div className={classNames([
        styles.toggle,
        label ? styles.hasLabel : undefined
      ])}>
        <input
          className={styles.inputTrue}
          type="radio"
          name={name}
          onChange={() => changeStatus(true)}
          defaultChecked={status}
        />
        <label className={styles.labelTrue}>{trueValue ?? 'True'}</label>
        <input
          className={styles.inputFalse}
          type="radio"
          name={name}
          onChange={() => changeStatus(false)}
          defaultChecked={!status} />
        <label className={styles.labelFalse}>{falseValue ?? 'False'}</label>
      </div>
    </>
  );
}

export default FormInput;