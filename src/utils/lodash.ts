export const keyBy = <T, U extends keyof T>(list: T[], key: U): Record<U, T> =>
  list.reduce((acc, curr) => {
    // @ts-ignore: @Todo resolve type error
    acc[curr[key]] = curr;
    return acc;
  }, {} as Record<U, T>);

export const size = <T extends number | string | symbol, U>(dictionary: Record<T, U>) =>
  Object.keys(dictionary).length;

export const values = <T extends number | string | symbol, U>(dictionary: Record<T, U>) =>
  Object.values(dictionary);