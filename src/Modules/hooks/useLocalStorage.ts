export const useLocalStorage = () => {
  const setValue = (key: string, value: any) => {
    localStorage.setItem(key, value);
  };

  const getValue = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeValue = (key: string) => {
    localStorage.removeItem(key);
  };

  return { setValue, getValue, removeValue };
};
