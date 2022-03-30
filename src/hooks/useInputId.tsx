import { useMemo } from 'react';
import uniqueId from 'lodash.uniqueid';
import { kebabCase } from '../utils';

/**
 * Create id for inputfield
 * @param label the input label 
 * @returns a clean id string
 */
export const useInputId = (label = ''): string => {
  const inputId = useMemo(() => uniqueId(kebabCase(label)), [label]);
  return inputId;
}