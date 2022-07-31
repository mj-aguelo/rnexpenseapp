import React, {
  createContext,
  FC,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react';

export interface IAppContext {
  theme: string;
}
const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

interface IAppContextProviderProps extends PropsWithChildren {
  initialState: IAppContext;
  reducer: Reducer<any, any>;
}

const AppContextProvider: FC<IAppContextProviderProps> = ({
  children,
  initialState,
  reducer,
}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[globalState, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
