import { type FC } from 'react';
import { Link } from "react-router-dom";
import { MainContent } from '../components';
import { routes, RouteTypes } from '../routes';

import styles from './Home.module.css';

const Home: FC = () => {
  return (
    <MainContent>
      <h1 className={styles.title}>{routes[RouteTypes.HOME].title}</h1>
      <ul className={styles.list}>
        <li>
          <Link className={styles.item} to={routes[RouteTypes.MATERIAL_UI].path}>
            {routes[RouteTypes.MATERIAL_UI].title}
          </Link>
        </li>
      </ul>
    </MainContent>
  );
}

export default Home;
