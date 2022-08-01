import React, {
  Dispatch,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import {appReducer} from 'store/appReducer';
import {initialState} from 'store/initialState';

export interface IAppState {
  theme: string;
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
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
