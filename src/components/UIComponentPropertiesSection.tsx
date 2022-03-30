import { useEffect, useState, useReducer, useContext, type FC, FormEvent } from 'react';
import * as UI from '../models/UIComponent';
import { UIComponentForm, UIComponentPropertiesItem, Button, Icon, Spinner } from '../components';
import { PropertyContext } from '../contexts/PropertyProvider';
import Plus from '../assets/plus.svg';

enum ReducerType {
  ADD = 'ADD',
  SET = 'SET',
  UPDATE = 'UPDATE',
  REMOVE = 'REMOVE', 
}

type ReducerAction =
  { type: ReducerType.ADD, payload: UI.Properties } |
  { type: ReducerType.SET, payload: UI.Properties[] } |
  { type: ReducerType.UPDATE, payload: UI.Properties } |
  { type: ReducerType.REMOVE, id: string };

const reducer = (
  state: UI.Properties[],
  action: ReducerAction
) => {
  switch (action.type) {
    case ReducerType.ADD:
      return [
        ...state,
        action.payload
      ];
    case ReducerType.SET:
      return action.payload;
    case ReducerType.UPDATE:
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case ReducerType.REMOVE:
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error();
  }
}

const UIComponentPropertiesSection: FC<{
  data: UI.Properties[];
  isFetching: boolean;
  onSave: (payload: UI.Properties[]) => void;
}> = (props) => {
  const context = useContext(PropertyContext);
  const [initialState, setInitialState] = useState(props.data);
  const [properties, dispatch] = useReducer(reducer, props.data);
  const [showNewForm, setShowNewForm] = useState(false);

  useEffect(() => {
    dispatch({ type: ReducerType.SET, payload: props.data});
    setInitialState(props.data);
  }, [props.data]);

  const handleSubmit = (ev:FormEvent): void => {
    ev.preventDefault();
    props.onSave(properties);
  }
  const handleReset = (ev:FormEvent): void => {
    ev.preventDefault();
    setShowNewForm(false);
    dispatch({ type: ReducerType.SET, payload: initialState });
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
        onSubmit={(payload) => dispatch({ type: ReducerType.ADD, payload})}
        onCancel={() => setShowNewForm(false)}
      />}

      <form id={context.state.formId} onSubmit={handleSubmit} onReset={handleReset}>
          {props.isFetching ? <Spinner /> : ''}
          {properties.map((d) =>
            <UIComponentPropertiesItem
              data={d}
              key={d.id}
              onChange={(payload) => dispatch({ type: ReducerType.UPDATE, payload})}
              onRemove={(id) => dispatch({ type: ReducerType.REMOVE, id})}
            />
          )}
        </form>
    </section>
  );
}

export default UIComponentPropertiesSection;