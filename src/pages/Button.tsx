import { useEffect, useState, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentPropertiesSection, UIComponentPropertiesFields } from '../components';

const ButtonPage: FC = () => {
  const [data, setData] = useState<UIComponent[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get(ApiRouteTypes.BUTTON);
      if (response.data) {
        setData(response.data);
      } else {
        throw new Error(response.error);
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);

  const handleNew = (payload: UIComponent): void => {
    console.log('handleNew created property', payload);
  }

  const handleChange = (payload: UIComponent): void => {
    console.log('handle', payload);
  }

  return (
    <> {JSON.stringify(data)}
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      @todo

      <UIComponentPropertiesSection onCreate={handleNew}>


        {isFetching ? <span>...</span> : ''}
        {data.map((d) =>
          <UIComponentPropertiesFields data={d} onChange={handleChange} key={d.id} />
        )}

      </UIComponentPropertiesSection>
    </>
  );
}

export default ButtonPage;