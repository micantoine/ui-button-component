
export enum PropertyType {
  Boolean = 'boolean',
  Node = 'node',
  OneOf = 'one of',
}

export enum PropertyOneOf {
  Select = 'select',
  Radio = 'radio',
}

export enum PropertyNode {
  Input = 'input',
  Textarea = 'textarea',
}
export const PropertyControl = {
  ...PropertyOneOf,
  ...PropertyNode
};
export class Properties {
  public name: string = '';
  public displayName: string = '';
  public description: string = '';
  public type: PropertyType |'' = '';
  public control: PropertyNode | PropertyOneOf | '' = '';
  public options: string = '';
  public defaultValue: string = '';
}

export default Properties;