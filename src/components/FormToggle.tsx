import { type ChangeEvent, type FC, useState } from 'react';
import FormLabel from './FormLabel';
import { classNames } from '../utils';
import styles from './FormToggle.module.css';

const FormInput: FC<{
  name?: string;
  label?: string;
  value?: boolean;
  trueValue?: string;
  falseValue?: string;
}> = ({ label, name, trueValue, falseValue, value = false }) => {
  const [status, setStatus] = useState(value)

  const handleChange = ( ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev);
    setStatus(ev.target.checked);
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
          name={name ?? 'toggle'}
          onChange={handleChange}
          checked={status}
        />
        <label className={styles.labelTrue}>{trueValue ?? 'True'}</label>
        <input className={styles.inputFalse} type="radio" name={name ?? 'toggle'} defaultChecked={!status} />
        <label className={styles.labelFalse}>{falseValue ?? 'False'}</label>
      </div>
    </>
  );
}

export default FormInput;