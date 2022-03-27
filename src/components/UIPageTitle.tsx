import { type FC } from 'react';
import { VisibilitySwitcher, Icon, Button } from '.';
import Gear from '../assets/gear.svg';

import styles from './UIPageTitle.module.css';

const UIPageTitle: FC = (props) => {

  const onVisibilityChange = (status: boolean): void => {
    console.log('visibility', status);
  }

  const onSettings = (): void => {
    console.log('settings clicked')
  }

  return (
    <h1 className={styles.title}>
      {props.children}
      <VisibilitySwitcher show={true} onChange={onVisibilityChange} />
      <Button variant="icon" onClick={onSettings}>
        <Icon src={Gear} />
      </Button>
    </h1>
  );
}

export default UIPageTitle;