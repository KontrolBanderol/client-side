import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('authState', JSON.stringify(store.getState().auth));
    return result;
  };

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    return { auth: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
};
