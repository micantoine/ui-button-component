import { createContext, useReducer, type Dispatch, type FC } from 'react';

type State = {
  formId: string;
  sending: boolean;
}
const initialState: State = {
  formId: 'form-component-properties',
  sending: false,
}

export enum PropertyCxtActionType {
  SEND = 'SEND',
  DID_SEND = 'DID_SEND',
}

type Action =
  { type: PropertyCxtActionType.SEND } |
  { type: PropertyCxtActionType.DID_SEND };

const reducer = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case PropertyCxtActionType.SEND:
      return {
        ...state,
        sending: true
      }
    case PropertyCxtActionType.DID_SEND:
      return {
        ...state,
        sending: false
      }
    default:
      return state
  }
}

export const PropertyContext = createContext<{
  state: State,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
});

export const PropertyProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PropertyContext.Provider value={{ state, dispatch }}>
    	{ children }
    </PropertyContext.Provider>
  )
}