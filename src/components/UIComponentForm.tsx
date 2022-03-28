import { type FC } from 'react';
import { Button, Container, UIComponentProperties } from '.';
import * as UI from '../models/UIComponent';

import styles from './UIComponentForm.module.css';

const UIPropertiesForm: FC<UI.Properties> = (props) => {
  const handleChange = (payload: UI.Properties): void => {
    console.log(payload);
  }

  return (
    <form>
      <Container ySpacing="small" size="md">
        <UIComponentProperties data={props} onChange={handleChange} />

        <div className={styles.actions}>
          <Button variant="link" type="reset">Cancel</Button>
          <Button color="primary" type="submit">Add</Button>
        </div>
      </Container>
    </form>
  );
}

export default UIPropertiesForm;