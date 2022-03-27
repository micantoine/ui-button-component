export function classNames(classes: Array<string|undefined>): string {
  return classes.filter((classname) => classname !== undefined).join(' ');
}