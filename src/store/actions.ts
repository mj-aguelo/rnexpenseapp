export const APP_SET_THEME = 'APP_SET_THEME';

export const setTheme = (theme: string) => ({
  type: APP_SET_THEME,
  payload: theme,
});
