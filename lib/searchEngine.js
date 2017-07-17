/* @flow */
import {constant} from './util';
import fuzzysearch from 'fuzzysearch';

export function fuzzy(needle: string, haystack: string): boolean {
  return fuzzysearch(needle.toLowerCase(), haystack.toLowerCase());
}

export function includes(needle: string, haystack: string): boolean {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1;
}

export function startsWith(needle: string, haystack: string): boolean {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) === 0;
}

export function getSearchEngine(engine: Function | 'fuzzy' | 'includes' | 'startsWith'): Function {
  if (typeof engine === 'function') return engine;

  switch (engine) {
  case 'fuzzy':
    return fuzzy;
  case 'includes':
    return includes;
  case 'startsWith':
    return startsWith;
  default:
    (engine: empty)
  }

  throw new Error('Unsupported search engine');
}
