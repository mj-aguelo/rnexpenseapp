import {TDispatchAction} from 'interfaces/Action.type';
import {
  ADD_EXPENSE,
  ADD_INCOME,
  APP_SET_STATE,
  APP_SET_THEME,
  RESET_STATE,
} from './actions';
import {initialState} from './initialState';

export const appReducer = (state = initialState, action: TDispatchAction) => {
  switch (action.type) {
    case APP_SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case ADD_INCOME: {
      return {
        ...state,
        income: state?.income
          ? state.income.concat(action.payload)
          : [action.payload],
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        expense: state?.expense
          ? state.expense.concat(action.payload)
          : [action.payload],
      };
    }
    case APP_SET_STATE: {
      return action.payload;
    }
    case RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};
