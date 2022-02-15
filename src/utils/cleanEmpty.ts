export const cleanEmpty = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = result[key];
    if (!value && value !== 0) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

