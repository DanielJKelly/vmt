import { initialState as loadingInitialState } from '../store/reducers/loadingReducer';

export const loadState = () => {
  // Need try/catch here because this could fail if browser has disabled local storage
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const savedState = {
      ...state,
      loading: loadingInitialState,
    };
    const serializedState = JSON.stringify(savedState);
    window.localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};
