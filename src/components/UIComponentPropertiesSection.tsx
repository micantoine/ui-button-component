import { useEffect, useState, type FC } from 'react';
import * as UI from '../models/UIComponent';
import { UIComponentForm, Button, Icon } from '../components';
import Plus from '../assets/plus.svg';

const UIComponentPropertiesSection: FC<{
  onCreate: (payload: UI.Properties) => void;
}> = (props) => {
  const [showNewForm, setShowNewForm] = useState(false);

  const handleSubmit = (payload: UI.Properties): void => {
    props.onCreate(payload);
  }

  const handleCancel = (): void => {
    setShowNewForm(false);
  }

  return (
    <>
      <h2>
        Properties
        <Button
          color="primary"
          variant="link"
          onClick={() => setShowNewForm((status) => !status)}
        >
          <Icon src={Plus} />
          Add new property
        </Button>
      </h2>

      {showNewForm && <UIComponentForm
        data={new UI.Properties()}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />}
    </>
  );
}

export default UIComponentPropertiesSection;