import { type FC } from 'react';
import { Link } from "react-router-dom";
import { routes, RouteTypes } from '../routes';

import PageTitle from '../components/PageTitle';

const Home: FC = () => {
  return (
    <>
      <PageTitle>{routes[RouteTypes.HOME].title}</PageTitle>
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
