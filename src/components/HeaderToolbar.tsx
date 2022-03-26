import { type FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { routes, RouteTypes } from '../routes';
import Button from './Button';
import Breadcrumb from './Breadcrumb';
import Icon from './Icon';
import styles from './HeaderToolbar.module.css';
import DashboardIcon from '../assets/layout-medium-tile-outline.svg'; 

const HeaderToolbar: FC<{ actions?: ReactElement }> = ({ actions }) => {
  const DashBoardLink = <Link
    to={routes[RouteTypes.HOME].path}
    title={routes[RouteTypes.HOME].title}
  >
    <Icon src={DashboardIcon} />
  </Link>;

  return (
    <header className={styles.toolbar}>
      <div className={styles.dashboard}>
        <Button
          element={DashBoardLink}
          variant="icon"
        />
      </div>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      {actions && <div className={styles.actions}>
        {actions}
      </div>}
    </header>
  )
}

export default HeaderToolbar;