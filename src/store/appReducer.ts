import {TDispatchAction} from 'interfaces/Action.type';
import {APP_SET_STATE, APP_SET_THEME} from './actions';
import {initialState} from './initialState';

export const appReducer = (state = initialState, action: TDispatchAction) => {
  switch (action.type) {
    case APP_SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case APP_SET_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
};
