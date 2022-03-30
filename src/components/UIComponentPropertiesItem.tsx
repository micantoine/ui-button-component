import { useState, type FC } from 'react';
import * as UI from '../models/UIComponent';
import {
  UIComponentPropertiesFields,
  Icon,
  Button,
  Container,
  Tooltip,
  VisibilitySwitcher
} from '.';
import { classNames } from '../utils';
import Plus from '../assets/plus.svg';
import Close from '../assets/close.svg';
import Trash from '../assets/trash.svg';

import styles from './UIComponentPropertiesItem.module.css';

const UIComponentPropertiesItem: FC<{
  data: UI.Properties;
  onChange: (payload: UI.Properties) => void;
  onRemove: (payload: string) => void;
}> = ({data, onRemove, onChange }) => {
  const [showMore, setShowMore] = useState(false);

  const handleVisibility = (status: boolean): void => {
    const newStatus = !status;
    onChange({
      ...data,
      hidden: newStatus
    });
  }

  const handleChange = (payload: UI.Properties): void => {
    onChange(payload)
  }

  const handleRemove = () => {
    onRemove(data.id);
  }

  return (
    <Container className={classNames([
      styles.item,
      data.hidden ? styles.hidden : undefined
    ])} ySpacing="small" size="md">
      <h3 className={styles.title}>
        <span className={classNames([
          styles.titleName,
          !data.name ? styles.noName : undefined
        ])}>{data.name || <>Unamed</>}</span>
        <Tooltip info={!data.hidden ? 'Hide property' : 'Show property'}>
          <VisibilitySwitcher show={!data.hidden} onChange={handleVisibility} />
        </Tooltip>
        {showMore && 
          <Tooltip info="Delete property">
            <Button variant="icon" onClick={handleRemove}>
              <Icon src={Trash} />
            </Button>
          </Tooltip>
        }
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