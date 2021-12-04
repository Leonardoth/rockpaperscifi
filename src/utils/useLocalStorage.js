import { useState, useEffect } from 'react';

// Taken from:
// https://youtu.be/6ThXsUwLWvc?list=PLJqKnvLIfEg0cVPNlogdtG-MOg1XJBeX5

// Gets key from local storage, if it doesn't exist, returns initialValue
function getSavedValue(key, initialValue) {
  // We always have to parse from local storage
  const savedValue = JSON.parse(localStorage.getItem(key));

  // If it finds the value, returns it
  if (savedValue) return savedValue;
  // If the initialValue is a Function, it'll be called and the initialValue will be it's return (just like useState)
  if (initialValue instanceof Function) return initialValue();

  // If the initialValue is not a Function, it'll be the value
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // Everytime the value changes, it'll save in the localStorage
  useEffect(() => {
    // We have to stringify the data before saving it to localStorage
    localStorage.setItem(key, JSON.stringify(value));

    // This next line is to ignore the warning of missing key dependency.
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}
