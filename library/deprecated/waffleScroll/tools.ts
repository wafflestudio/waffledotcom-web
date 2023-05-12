//Pick
export type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? (U extends T[P] ? P : never) : never]: T[P];
};

//compare
export const partialIsDifferent = <T extends object>(
  state: T,
  partialState: Partial<T>,
): boolean => {
  const originalKeys = Object.keys(state);
  const partialEntries = Object.entries(partialState);
  if (originalKeys.length < 1) {
    return false;
  }
  for (const [key, value] of partialEntries) {
    if (originalKeys.includes(key)) {
      const validKey = key as keyof typeof state;
      if (state[validKey] !== value) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
};

//calculate
export type Calculatable = { offsetTop: number; offsetHeight: number };

export const calculateProgress = (
  target: Calculatable,
  viewport: Calculatable,
): number => {
  const { offsetTop: targetTop, offsetHeight: targetHeight } = target;
  const { offsetTop: viewportTop, offsetHeight: viewportHeight } = viewport;
  const diff = viewportTop + viewportHeight - targetTop;
  if (diff < 0) return 0;
  if (diff > targetHeight + viewportHeight) return 3;
  if (viewportHeight === targetHeight) {
    if (diff <= viewportHeight) return diff / viewportHeight;
    if (diff > viewportHeight) return 1 + diff / viewportHeight;
  }
  if (viewportHeight < targetHeight) {
    if (diff <= viewportHeight) return diff / viewportHeight;
    if (diff > viewportHeight && diff < targetHeight)
      return 1 + (diff - viewportHeight) / (targetHeight - viewportHeight);
    if (diff >= targetHeight) return 2 + (diff - targetHeight) / viewportHeight;
  }
  if (viewportHeight > targetHeight) {
    if (diff <= targetHeight) return 1 + diff / targetHeight;
    if (diff > targetHeight && diff < viewportHeight)
      return 1 + (diff - targetHeight) / (viewportHeight - targetHeight);
    if (diff >= viewportHeight)
      return 2 + (diff - viewportHeight) / targetHeight;
  }
  return -999999;
};

export const roundBy = (value: number, threshold: number): number => {
  const step = 10 ** threshold;
  return Math.round(value * step) / step;
};
