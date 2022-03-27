import { useState, type FC } from 'react';
import { Button, Icon } from './';
import HiddenIcon from '../assets/visibility-hidden.svg'; 
import VisibleIcon from '../assets/visibility-visible.svg'; 

const VisibilitySwitcher: FC<{
  status: boolean,
  onChange: (status: boolean) => void
}> = ({ status, onChange }) => {
  const [visible, setVisibility] = useState(status);

  const switchStatus = (): void => {
    setVisibility(!visible);
    onChange(visible);
  }

  return (
    <Button variant="icon" onClick={switchStatus}>
      <Icon src={visible ? VisibleIcon : HiddenIcon} />
    </Button>
  );
}

export default VisibilitySwitcher;
