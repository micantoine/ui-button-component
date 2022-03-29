/**
 * Transform string to kebab case
 * @param [str] the string to be processed
 * @returns the kebab-case version
 */
export const kebabCase = (str: string): string => {
  return str.trim().replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').replace(/[\s_+,?:!/\\]/g, '-').toLowerCase();
}