import { type FC } from 'react';
import { Link, useLocation } from "react-router-dom";
import { routes, RouteTypes, type Route } from '../routes';
import styles from './Breadcrumb.module.css';

const Breadcrumb: FC = () => {
  const location = useLocation();
  
  const breadcrumb: Route[] = [];

  const routeKeys = Object.keys(RouteTypes) as unknown as Array<RouteTypes>;

  const activeRouteKey = (url: string) => routeKeys.find(
    (key) => routes[key].path === url
  );

  let url = `${location.pathname}/`;

  while (url !== '') {
    url = url.substring(0, url.lastIndexOf('/'));
    const key = activeRouteKey(url);
    if (key) {
      breadcrumb.unshift(routes[key]);
    }
  }
  
  return (
    <ul className={styles.breadcrumb}>
      {breadcrumb.map((route, index) =>
        <li key={route.path}>
          {index === breadcrumb.length - 1
            ? <span className={styles.active}>{route.title}</span>
            : <Link className={styles.link} to={route.path}>{route.title}</Link>
          }
        </li>
      )}
    </ul>
  )
}

export default Breadcrumb;