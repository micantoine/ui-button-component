import { useState, type FormHTMLAttributes, type FC, FormEvent } from 'react';
import { Button, Container, UIComponentProperties } from '.';
import * as UI from '../models/UIComponent';

import styles from './UIComponentForm.module.css';

const UIPropertiesForm: FC<{
  data: UI.Properties,
  onCancel?: () => void
  onSubmit: (payload: UI.Properties) => void
}> = (props) => {

  const [currentData, setCurrentData ] = useState<UI.Properties>(props.data);
  const [newData, setNewData ] = useState<UI.Properties>(new UI.Properties());

  const handleChange = (payload: UI.Properties): void => {
    setNewData(payload);
  }
  const handleCancel = (): void => {
    props.onCancel && props.onCancel();
  }
  const handleSubmit = (ev: FormEvent): void => {
    ev.preventDefault();
    setCurrentData(new UI.Properties());
    props.onSubmit(newData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container ySpacing="small" size="md">
        <UIComponentProperties data={currentData} onChange={handleChange} />

        <div className={styles.actions}>
          <Button variant="link" onClick={handleCancel}>Cancel</Button>
          <Button color="primary" type="submit">Add</Button>
        </div>
      </Container>
    </form>
  );
}

export default UIPropertiesForm;