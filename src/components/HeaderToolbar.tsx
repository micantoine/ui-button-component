import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { routes, RouteTypes } from '../routes';
import Button from './Button';
import Breadcrumb from './Breadcrumb';
import Icon from './Icon';
import styles from './HeaderToolbar.module.css';
import DashboardIcon from '../assets/layout-medium-tile-outline.svg'; 

const HeaderToolbar: FC = () => {
  const DashBoardLink = <Link
    to={routes[RouteTypes.HOME].path}
    title={routes[RouteTypes.HOME].title}
  >
    <Icon src={DashboardIcon} />
  </Link>;

  return (
    <div className={styles.toolbar}>
      <div className={styles.dashboard}>
        <Button
          element={DashBoardLink}
          iconOnly
        />
      </div>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.actions}>
        <Button variant="link">Discard changes</Button>
        <Button variant={['primary', 'small']}>Save changes</Button>
      </div>
    </div>
  )
}

export default HeaderToolbar;