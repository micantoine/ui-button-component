export function classNames(classes: Array<string|null>): string {
  return classes.filter((classname) => classname !== null).join(' ');
}