import { type ChangeEvent, useState, type FC } from 'react';
import { FormInput, FormTextarea, FormSelect, Tip } from '.';
import * as UI from '../models/UIComponent';

import styles from './UIPropertiesForm.module.css';

const UIPropertiesForm: FC<UI.Properties> = (props) => {
  const [properties, setProperties] = useState(props);

  const handleChange = (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>): void => {
    const value = ev.target.value;
    const name = ev.target.name;

    setProperties({
      ...properties,
      [name]: value,
    });
  }

  return (
    <form>

      <div className={styles.group}>
        <FormInput
          label="Property name"
          name="name"
          value={properties.name}
          onChange={handleChange} />
        <Tip size="small">(name of the property given in code)</Tip>
      </div>

      <div className={styles.group}>
        <FormInput
          label="Display name"
          name="displayName"
          value={properties.displayName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <FormTextarea
          label="Description"
          name="description"
          value={properties.description}
          onChange={handleChange} />
      </div>

      <div className={styles.group}>
        <FormSelect
          label="Property type"
          name="type"
          value={properties.type}
          options={Object.values(UI.PropertyType)}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <FormSelect
          label="Property control"
          name="control"
          value={properties.control}
          options={Object.values(UI.PropertyControl)}
          onChange={handleChange}
        />
        <Tip size="small">(type of control displayed in editor's properties panel.  <a href="/#" title="Learn more">Learn more</a> about control types)</Tip>
      </div>
      
      <div className={styles.group}>
        <FormTextarea
          label="Options"
          name="options"
          size="small"
          value={properties.options}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <FormSelect
          label="Default value"
          name="defaultValue"
          useEmpty={properties.options.length > 0}
          value={properties.defaultValue}
          options={(properties.options ?? '').split(',')}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default UIPropertiesForm;