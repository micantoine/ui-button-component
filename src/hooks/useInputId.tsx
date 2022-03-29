import { useMemo } from 'react';
import { kebabCase } from '../utils';

/**
 * Create id for inputfield
 * @param param0 input data
 * @param param0.id the input ID
 * @param param0.label the input label 
 * @returns a clean id string
 */
export const useInputId = ({id, label}: {id?: string, label?: string}): string | undefined => {
  const inputId = useMemo(() => id || kebabCase(label), [id, label]);
  return inputId;
}