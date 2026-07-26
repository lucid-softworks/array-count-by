export type CountKeySelector<TValue, TKey> = (
  value: TValue,
  index: number,
  values: readonly TValue[],
) => TKey;

/** Counts values by key in a Map, preserving first-key insertion order. */
export function countBy<TValue, TKey>(
  values: readonly TValue[],
  selectKey: CountKeySelector<TValue, TKey>,
): Map<TKey, number> {
  const counts = new Map<TKey, number>();
  values.forEach((value, index) => {
    const key = selectKey(value, index, values);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return counts;
}
