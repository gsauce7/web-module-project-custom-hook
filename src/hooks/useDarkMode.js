import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, false);
  return [darkMode, setDarkMode];
};
