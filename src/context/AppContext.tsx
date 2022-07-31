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

export interface IAppContext {
  theme?: string;
}
const AppContext = createContext<{
  state?: IAppContext;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
