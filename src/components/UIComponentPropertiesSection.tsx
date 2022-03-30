import { useEffect, useState, type FC } from 'react';
import * as UI from '../models/UIComponent';
import { UIComponentForm, UIComponentPropertiesItem, Button, Icon, Spinner } from '../components';
import Plus from '../assets/plus.svg';

const UIComponentPropertiesSection: FC<{
  data: UI.Properties[];
  isFetching: boolean;
}> = (props) => {
  const [properties, setProperties] = useState(props.data);
  const [showNewForm, setShowNewForm] = useState(false);

  useEffect(() => {
    setProperties(props.data);
  }, [props.data]);

  const handleNew = (payload: UI.Properties): void => {
    setProperties((state) => {
      return [
        ...state,
        payload
      ];
    });
  }

  const handleChange = (payload: UI.Properties): void => {
    setProperties((state) => {
      return state.map((item) => {
        return item.id === payload.id ? payload : item;
      })
    });
  }

  const handleRemoval = (id: string) => {
    setProperties((state) => {
      return state.filter((item) => item.id !== id);
    });
  }

  const handleCancel = (): void => {
    setShowNewForm(false);
  }

  return (
    <section>
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
        onSubmit={handleNew}
        onCancel={handleCancel}
      />}

      <form>
          {props.isFetching ? <Spinner /> : ''}
          {properties.map((d) =>
            <UIComponentPropertiesItem
              data={d}
              key={d.id}
              onChange={handleChange}
              onRemove={handleRemoval}
            />
          )}
        </form>
    </section>
  );
}

export default UIComponentPropertiesSection;