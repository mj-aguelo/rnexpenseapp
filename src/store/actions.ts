export const APP_SET_THEME = 'APP_SET_THEME';
export const APP_SET_STATE = 'APP_SET_STATE';

export const setTheme = (theme: string) => ({
  type: APP_SET_THEME,
  payload: theme,
});

export const setAppState = (state: object) => ({
  type: APP_SET_STATE,
  payload: state,
});
