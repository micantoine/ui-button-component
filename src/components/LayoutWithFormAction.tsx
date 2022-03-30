import { useContext, type FC } from 'react';
import { PropertyContext, PropertyProvider } from '../contexts/PropertyProvider';
import { Button, Layout, Spinner } from '.';


const ActionButtons: FC = () => {
  const cxt = useContext(PropertyContext);

  return (
    <>
      <Button
        variant="link"
        type="reset"
        form={cxt.state.formId}
      >Discard changes</Button>
      <Button
        size="small"
        color="primary"
        type="submit"
        form={cxt.state.formId}
        disabled={cxt.state.sending}
      >Save changes {cxt.state.sending && <Spinner/>}</Button>
    </>
  )
}

const LayoutWithFormAction: FC = () => {
   return (
     <PropertyProvider>
       <Layout actions={<ActionButtons />} />
     </PropertyProvider>
   );
}

export default LayoutWithFormAction;