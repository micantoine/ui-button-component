import { useState, type FC } from 'react';
import * as UI from '../models/UIComponent';
import {
  UIComponentPropertiesFields,
  Icon,
  Button,
  Container,
  VisibilitySwitcher
} from '.';
import { classNames } from '../utils';
import Plus from '../assets/plus.svg';
import Close from '../assets/close.svg';
import Trash from '../assets/trash.svg';

import styles from './UIComponentPropertiesItem.module.css';

const UIComponentPropertiesItem: FC<{
  data: UI.Properties
}> = ({data}) => {
  const [isHidden, setIsHidden] = useState(data.hidden);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (payload: UI.Properties): void => {

  }

  const handleRemove = () => {

  }

  return (
    <Container className={classNames([
      styles.item,
      isHidden ? styles.hidden : undefined
    ])} ySpacing="small" size="md">
      <h3 className={styles.title}>
        <span className={classNames([
          styles.titleName,
          !data.name ? styles.noName : undefined
        ])}>{data.name ?? <>Unamed</>}</span>
        <VisibilitySwitcher show={!data.hidden} onChange={(status) => setIsHidden(!status)} />
        {showMore && <Button variant="icon" onClick={handleRemove}>
          <Icon src={Trash} />
        </Button>}
      </h3>
      <div className={styles.content}>
        <fieldset>
          {showMore && <UIComponentPropertiesFields data={data} onChange={handleChange} />}
        </fieldset>
        <Button variant="icon" onClick={() => setShowMore((state) => !state)}>
          <Icon src={!showMore ? Plus : Close} width="12" height="12" />
        </Button>
      </div>
    </Container>
  );
}

export default UIComponentPropertiesItem;