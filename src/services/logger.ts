export const logValue = (value: object) => {
  // Tempory solution until we add proper logging
  // eslint-disable-next-line
  console.log(JSON.stringify(value, null, 2));
};

export const logError = (e: unknown) => {
  // Tempory solution until we add proper error-handling
  // eslint-disable-next-line
  console.warn(e);
};
