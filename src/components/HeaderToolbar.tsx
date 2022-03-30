import { type FC, ReactElement, type HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { routes, RouteTypes } from '../routes';
import { classNames } from '../utils';
import Button from './Button';
import Breadcrumb from './Breadcrumb';
import Icon from './Icon';
import Tooltip from './Tooltip';
import styles from './HeaderToolbar.module.css';
import DashboardIcon from '../assets/layout-medium-tile-outline.svg'; 

const HeaderToolbar: FC<HTMLAttributes<{}> & {
  actions?: ReactElement
}> = ({ actions, className, ...props }) => {

  const DashBoardLink = <Link
    to={routes[RouteTypes.HOME].path}
    title={routes[RouteTypes.HOME].title}
  >
    <Icon src={DashboardIcon} />
  </Link>;

  return (
    <header className={classNames([
      styles.toolbar,
      className
    ])} {...props}>
      <div className={styles.dashboard}>
        <Tooltip info="Open Dashboard">
          <Button
            element={DashBoardLink}
            variant="icon"
          />
        </Tooltip>
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