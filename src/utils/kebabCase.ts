/**
 * Transform string to kebab case
 * @param [str] the string to be processed
 * @returns the kebab-case version
 */
export const kebabCase = (str?: string): string | undefined => {
  return str?.toLowerCase().trim().replace(/\s/, '-');
}