import { useMemo } from 'react';
import uniqueId from 'lodash.uniqueid';
import { kebabCase } from '../utils';

/**
 * Create unique id
 * @param prefix the value to prefix the id
 * @returns a clean id string
 */
export const useUniqueId = (prefix = ''): string => {
  const inputId = useMemo(() => uniqueId(kebabCase(prefix)), [prefix]);
  return inputId;
}