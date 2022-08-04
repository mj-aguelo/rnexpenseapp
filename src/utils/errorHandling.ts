export const catchError = (e: unknown) => {
  let error;
  if (typeof e === 'string') {
    error = e.toUpperCase();
  } else if (e instanceof Error) {
    error = e.message;
  }

  throw new Error(error);
};
