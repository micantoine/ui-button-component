import { useEffect, useState, useContext, type FC } from 'react';
import { Api, ApiRouteTypes } from '../middlewares/Api';
import { PropertyContext, PropertyCxtActionType } from '../contexts/PropertyProvider';
import UIComponent from '../models/UIComponent';
import {
  UIPageTitle,
  UIComponentPropertiesSection,
} from '../components';

const ButtonPage: FC = () => {
  const ctx = useContext(PropertyContext);
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

  const handleSaving = async (payload: UIComponent[]): Promise<void> => {
    ctx.dispatch({type: PropertyCxtActionType.SEND});
    const response = await Api.put(ApiRouteTypes.BUTTON, {
      data: payload
    });
    ctx.dispatch({type: PropertyCxtActionType.DID_SEND});
    if (!response.success) {
      throw new Error(response.error);
    }
  }

  return (
    <>
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      @todo

      <UIComponentPropertiesSection
        data={data}
        isFetching={isFetching}
        onSave={handleSaving}
      />
    </>
  );
}

export default ButtonPage;