import { type FC } from 'react';
import { Button, Layout } from '.';

const LayoutWithFormAction: FC = () => {
  const formId = 'form-component';
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
    <Layout actions={actions} />
   );
}

export default LayoutWithFormAction;