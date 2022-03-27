import { type FC } from 'react';
import { Link } from "react-router-dom";
import { routes, RouteTypes } from '../routes';

const Home: FC = () => {
  return (
    <>
      <h1>{routes[RouteTypes.HOME].title}</h1>
      <ul>
        <li>
          <Link to={routes[RouteTypes.MATERIAL_UI].path}>
            {routes[RouteTypes.MATERIAL_UI].title}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
