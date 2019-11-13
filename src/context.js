import React, {createContext, useReducer} from 'react';
import reducer, { initialState } from './Reducer';


const ToDosContext = createContext();

const ToDosProvider = ({children}) => {
    const [state, dispatch] = useReducer (reducer, initialState);
    return (
        <ToDosContext.Provider
            value={state, dispatch}
        >
            {children}
        </ToDosContext.Provider>
    )
}

export default ToDosProvider;