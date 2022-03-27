
export enum PropertyType {
  None = '',
  Boolean = 'boolean',
  Node = 'node',
  OneOf = 'one of',
}

export enum PropertyControl {
  None = '',
  Input = 'input',
  Radio = 'radio',
  Select = 'select',
  Textarea = 'textarea',
}

export class Properties {
  public name: string = '';
  public displayName: string = '';
  public description: string = '';
  public type: PropertyType = PropertyType.None;
  public control: PropertyControl = PropertyControl.None;
  public options: string = '';
  public defaultValue: string = '';
}

export default Properties;