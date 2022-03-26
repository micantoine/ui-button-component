 import { type FC } from 'react';
import { Link } from "react-router-dom";
import { routes, RouteTypes } from '../routes';
import { PageTitle, Button } from '../components';

const MaterialUI: FC = () => {
  return (
    <>
      <PageTitle>{routes[RouteTypes.MATERIAL_UI].title}</PageTitle>
      <ul>
        <li>
          <Button color="primary" variant="link" element={
            <Link to={routes[RouteTypes.MATERIAL_UI_BUTTON].path}>
              {routes[RouteTypes.MATERIAL_UI_BUTTON].title}
            </Link>
          } />
        </li>
        <li>
          <Button color="primary" variant="link" element={
            <Link to={routes[RouteTypes.MATERIAL_UI_CARD].path}>
              {routes[RouteTypes.MATERIAL_UI_CARD].title}
            </Link>
          } />
        </li>
      </ul>
    </>
  );
}

export default MaterialUI;
