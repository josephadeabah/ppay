export const groupBy = <T, K extends keyof any>(
  array: T[],
  key: (item: T) => K,
) => {
  return array.reduce(
    (result, currentValue) => {
      const groupKey = key(currentValue);
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    },
    {} as Record<K, T[]>,
  );
};
