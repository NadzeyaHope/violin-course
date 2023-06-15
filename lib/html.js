export const attrToString = (attr) => {
    return Object.entries(attr).reduce((acc, entry) => {
      const [key, value] = entry;
      acc.push(`${key}="${value}"`);
      return acc;
    }, []).join(' ')
  }