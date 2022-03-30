import { createContext, type FC } from 'react';
import { Button, Layout } from '.';

const formId = 'form-component-properties';
export const PropertyContext = createContext({
  formId,
});

const LayoutWithFormAction: FC = () => {
  const actions = 
    <>
      <Button
        variant="link"
        type="reset"
        form={formId}
      >Discard changes</Button>
      <Button
        size="small"
        color="primary"
        type="submit"
        form={formId}
      >Save changes</Button>
    </>;

   return (
     <PropertyContext.Provider value={{formId}}>
       <Layout actions={actions} />
     </PropertyContext.Provider>
   );
}

export default LayoutWithFormAction;