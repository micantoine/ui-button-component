import { useEffect, useState, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentPropertiesSection, } from '../components';

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

  const handleNew = (payload: UIComponent): void => {
    console.log('handleNew created property', payload);
  }

  return (
    <> {JSON.stringify(data)}
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      @todo

      <UIComponentPropertiesSection onCreate={handleNew} />
    </>
  );
}

export default ButtonPage;