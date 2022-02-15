import { useEffect, useState } from 'react';

export const useMount = (func: () => void) => {
  useEffect(() => {
    func();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
};

export const useArray = <V>(initialValue: V[]) => {
  const [value, setValue] = useState(initialValue);

  const add = (item: V) => {
    setValue([...value, item]);
  };

  const removeIndex = (index: number) => {
    const copy = value;
    copy.splice(index, 1);
    setValue(copy);
  };

  const clear = () => setValue([]);

  return {
    value,
    setValue,
    add,
    removeIndex,
    clear,
  };
};
