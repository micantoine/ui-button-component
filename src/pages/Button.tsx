import { useEffect, useState, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentForm, Button, Icon } from '../components';
import Plus from '../assets/plus.svg';

const ButtonPage: FC = () => {
  const [data, setData] = useState<UIComponent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get(ApiRouteTypes.BUTTON);
      if (response.data) {
        setData(response.data);
      } else {
        throw new Error(response.error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (payload: UIComponent): void => {
    console.log('handleSubmit', payload);
  }

  const handleCancel = (): void => {
    console.log('handle Cancel');
  }

  return (
    <> {JSON.stringify(data)}
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      @todo
      
      <h2>
        Properties
        <Button color="primary" variant="link">
          <Icon src={Plus} />
          Add new property
        </Button>
      </h2>

      <UIComponentForm
        data={new UIComponent()}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}

export default ButtonPage;