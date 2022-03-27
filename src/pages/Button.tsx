import { type FC } from 'react';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIPropertiesForm } from '../components';

const Button: FC = () => {
  return (
    <>
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      todo
      
      <h2>Properties</h2>
      <UIPropertiesForm {...new UIComponent()} />
    </>
  );
}

export default Button;