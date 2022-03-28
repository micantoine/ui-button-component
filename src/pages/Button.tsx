import { useEffect, useState, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentForm } from '../components';

const Button: FC = () => {
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

  const handleSubmit = (payload: UIComponent) => {
    console.log('handleSubmit', payload);
  }
  return (
    <> {JSON.stringify(data)}
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      @todo
      
      <h2>Properties</h2>

      <UIComponentForm data={new UIComponent()} onSubmit={handleSubmit} />
    </>
  );
}

export default Button;