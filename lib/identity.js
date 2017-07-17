/* @flow */
let counter = 0;

export function genericId(): string {
  return `_teatime${++counter}`;
}
