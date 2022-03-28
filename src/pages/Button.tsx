import { type FC } from 'react';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentForm } from '../components';

const Button: FC = () => {
  return (
    <>
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      todo
      
      <h2>Properties</h2>
      <UIComponentForm {...new UIComponent()} />
    </>
  );
}

export default Button;