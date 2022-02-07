import {createContext, useContext, useReducer, FC, Dispatch} from "react";
import {initialState} from "./initialState";
import {AppState, appStateReducer} from "./appStateReducer";
import {Action} from "./actions";

interface IAppContext {
    state: AppState,
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<IAppContext>({} as IAppContext)

export const AppStateProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(appStateReducer, initialState)
    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext)
