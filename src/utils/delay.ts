/**
 * Create delay before executing another action
 * @param length The time length to wait in milliseconds
 */
export const delay = (length: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, length));
};
