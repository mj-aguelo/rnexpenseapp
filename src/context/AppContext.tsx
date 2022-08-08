import useStorage from 'hooks/useStorage';
import {ITransaction} from 'interfaces/Transaction.interface';
import React, {
  Dispatch,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import {APP_SET_STATE} from 'store/actions';
import {appReducer} from 'store/appReducer';
import {initialState, persistKeys} from 'store/initialState';

export interface IAppState {
  theme: string;
  income: Array<ITransaction>;
  expense: Array<ITransaction>;
}

export interface IAppContext {
  state?: IAppState;
  dispatch: Dispatch<any>;
}

const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [contextState, setContextState] = useState<object | null>(null);
  const [state, dispatch] = useReducer(appReducer, initialState);
  const storage = useStorage();

  useEffect(
    function setPesistedState() {
      if (contextState !== null) {
        let persistedState = {};

        persistKeys
          .filter(key => key in state)
          .forEach(key => {
            persistedState = {
              ...persistedState,
              [key]: state[key],
            };
          });

        storage.setItem('app', persistedState);
      }
    },
    [state, storage, contextState],
  );

  useEffect(
    function getDataFromStorage() {
      async function loadData() {
        await storage.getItem('app', initialState).then(st => {
          if (st !== null) {
            dispatch({type: APP_SET_STATE, payload: st});
            setContextState(st);
          }
        });
      }

      if (contextState === null) {
        loadData();
      }
    },
    [storage, contextState],
  );

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
