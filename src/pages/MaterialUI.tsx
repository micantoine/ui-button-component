 import { type FC } from 'react';
import { Link } from "react-router-dom";
import { routes, RouteTypes } from '../routes';
import { Button } from '../components';

const MaterialUI: FC = () => {
  return (
    <>
      <h1>{routes[RouteTypes.MATERIAL_UI].title}</h1>
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
            <Link to={routes[RouteTypes.MATERIAL_UI_PILL].path}>
              {routes[RouteTypes.MATERIAL_UI_PILL].title}
            </Link>
          } />
        </li>
      </ul>
    </>
  );
}

export default MaterialUI;
