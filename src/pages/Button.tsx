import { type FC } from 'react';
import UIComponent from '../models/UIComponent';
import { UIPageTitle, UIComponentForm } from '../components';

const Button: FC = () => {
  const handleSubmit = (payload: UIComponent) => {
    console.log('handleSubmit', payload);
  }
  return (
    <>
      <UIPageTitle>Button</UIPageTitle>
      <h2>Component preview</h2>
      todo
      
      <h2>Properties</h2>

      <UIComponentForm data={new UIComponent()} onSubmit={handleSubmit} />
    </>
  );
}

export default Button;