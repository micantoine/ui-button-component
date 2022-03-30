import { type ChangeEvent, useState, useEffect, type FC } from 'react';
import { FormInput, FormTextarea, FormSelect, FormToggle, Tip } from '.';
import * as UI from '../models/UIComponent';
import styles from './UIComponentPropertiesFields.module.css';

type ChangeEventType = HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement;

const UIComponentPropertiesFields: FC<{
  data: UI.Properties;
  onChange: (payload: UI.Properties) => void;
}> = ({data, ...props }) => {
  const [properties, setProperties] = useState({...data});
  const propertyOneOfValues = Object.values(UI.PropertyOneOf) as string[];
  const propertyNodeValues = Object.values(UI.PropertyNode) as string[];

  const propertyControlOptions = Object.values(UI.PropertyControl).filter(
    (p) => {
      if (properties.type === UI.PropertyType.OneOf) {
        return propertyOneOfValues.includes(p);
      }
      if (properties.type === UI.PropertyType.Node) {
        return propertyNodeValues.includes(p);
      }
      return true;
    }
  )

  useEffect(() => {
    setProperties(data);
  }, [data]);

  const handleChange = (ev: ChangeEvent<ChangeEventType>): void => {
    const value = ev.target.value;
    const name = ev.target.name;

    const newValue = {
      ...properties,
      [name]: value,
    };

    setProperties(newValue);
    props.onChange(newValue);
  }

  return (
    <>
      <div className={styles.group}>
        <FormInput
          label="Property name"
          name="name"
          value={properties.name}
          onChange={handleChange}
        />
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
          useEmpty
          onChange={handleChange}
        />
      </div>

      {properties.type !== UI.PropertyType.Boolean &&
        <div className={styles.group}>
          <FormSelect

            label="Property control"
            name="control"
            value={properties.control}
            options={propertyControlOptions}
            useEmpty={!properties.type}
            onChange={handleChange}
          />
          <Tip size="small">(type of control displayed in editor's properties panel.  <a href="/#" title="Learn more">Learn more</a> about control types)</Tip>
        </div>
      }

      {properties.type === UI.PropertyType.Node && properties.control === UI.PropertyNode.Input &&
        <div className={styles.group}>
          <FormInput
            label="Default value"
            name="defaultValue"
            value={properties.defaultValue}
            onChange={handleChange}
          />
        </div>
      }

      {properties.type === UI.PropertyType.Node && properties.control === UI.PropertyNode.Textarea &&
        <div className={styles.group}>
          <FormTextarea
            label="Default value"
            name="defaultValue"
            size="small"
            value={properties.defaultValue}
            onChange={handleChange}
          />
        </div>
      }

      {properties.type === UI.PropertyType.OneOf && <>
        <div className={styles.group}>
          <FormTextarea
            label="Options"
            name="options"
            size="small"
            value={properties.options}
            onChange={handleChange}
          />
          <Tip size="small">(list options sepafared by comma)</Tip>
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
      </>}

      {properties.type === UI.PropertyType.Boolean &&
        <div className={styles.group}>
          <FormToggle
            label="Default value"
            name="defaultValue"
            value={properties.defaultValue.length > 0}
          />
        </div>
      }
    </>
  );
}

export default UIComponentPropertiesFields;