import {APP_SET_THEME} from './actions';
import {initialState} from './initialState';

type TAppAction = {
  theme: string;
  type: string;
};

export const appReducer = (state = initialState, action: TAppAction) => {
  if (action.type === APP_SET_THEME) {
    return {
      ...state,
      bookings: state.theme.concat(action.theme),
    };
  }
};
