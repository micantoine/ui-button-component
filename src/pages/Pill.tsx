import { useEffect, useState, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import UIComponent from '../models/UIComponent';
import {
  UIPageTitle,
  UIComponentPropertiesSection,
} from '../components';

const PillPage: FC = () => {
  const [data, setData] = useState<UIComponent[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get(ApiRouteTypes.PILL);
      if (response.data) {
        setData(response.data);
      } else {
        throw new Error(response.error);
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <UIPageTitle>Pill</UIPageTitle>
      <h2>Component preview</h2>
      @todo

      <UIComponentPropertiesSection
        data={data}
        isFetching={isFetching}
      />
    </>
  );
}

export default PillPage;