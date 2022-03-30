import type { HTMLAttributes, FC } from 'react';
import { VisibilitySwitcher, Icon, Button, Tooltip } from '.';
import styles from './UIPageTitle.module.css';
import { classNames } from '../utils';
import Gear from '../assets/gear.svg';

const UIPageTitle: FC<HTMLAttributes<{}>> = ({ className, ...props }) => {
  const onVisibilityChange = (status: boolean): void => {
    console.log('visibility', status);
  }

  const onSettings = (): void => {
    console.log('settings clicked')
  }

  return (
    <h1 className={classNames([
      styles.title,
      className
    ])} {...props}>
      {props.children}
      <Tooltip info={<>Toggle component<br/>visibilty in library</>}>
        <VisibilitySwitcher show={true} onChange={onVisibilityChange} />
      </Tooltip>
      <Tooltip info="Component settings">
        <Button variant="icon" onClick={onSettings}>
          <Icon src={Gear} />
        </Button>
      </Tooltip>
    </h1>
  );
}

export default UIPageTitle;