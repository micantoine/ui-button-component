import { useEffect, useState, type FC } from 'react';
import { Button, Icon } from './';
import HiddenIcon from '../assets/visibility-hidden.svg'; 
import VisibleIcon from '../assets/visibility-visible.svg'; 

const VisibilitySwitcher: FC<{
  show: boolean,
  className?: string,
  onChange: (status: boolean) => void
}> = ({ show, onChange, className }) => {
  const [visible, setVisibility] = useState(show);

  const handleClick = (): void => {
    setVisibility(!visible);
    onChange(!visible);
  }

  useEffect(() => {
    setVisibility(show);
  }, [show]);

  return (
    <Button variant="icon" className={className} onClick={handleClick}>
      <Icon src={visible ? VisibleIcon : HiddenIcon} />
    </Button>
  );
}

export default VisibilitySwitcher;
