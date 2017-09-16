export function isControlled(props: {value?: mixed}): boolean {
  return typeof props.value !== 'undefined';
}

export function noop(): void {}

export function pickValue<V, D>(
  isControlled: boolean,
  defaultValue: ?V,
  controlledValue: ?V,
  defaults: D
): V | D {
  const value = isControlled ? controlledValue : defaultValue;
  if (typeof value !== 'undefined' && value !== null) return value;
  return defaults;
}
