import { useMemo, type FC } from 'react';
import { Link, useLocation } from "react-router-dom";
import { getRoute, type Route } from '../routes';
import styles from './Breadcrumb.module.css';

const getBreadcrumb = (pathname: string): Route[] => {
  const breadcrumb: Route[] = [];
  let url = `${pathname}/`;
  while (url !== '') {
    url = url.substring(0, url.lastIndexOf('/'));
    const route = getRoute(url);
    if (route) {
      breadcrumb.unshift(route);
    }
  }
  return breadcrumb;
}

const Breadcrumb: FC = () => {
  const location = useLocation();
  const breadcrumb = useMemo<Route[]>(
    () => getBreadcrumb(location.pathname)
  , [location.pathname]);

  return (
    <ul className={styles.list}>
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