let counter = 0;

/**
 * @return {string}
 */
export function generateId() {
  return `_tc${++counter}`;
};
