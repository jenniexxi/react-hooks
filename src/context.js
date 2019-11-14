import React, {createContext, useReducer, useContext} from 'react';
import reducer, { initialState } from './Reducer';


const ToDosContext = createContext();

const ToDosProvider = ({children}) => {
    const [state, dispatch] = useReducer (reducer, initialState);
    return (
        <ToDosContext.Provider
            value = {{state, 
                    dispatch}}
        >
            {children}
        </ToDosContext.Provider>
    )
}


export const useToDoState = () => {
    const {state} = useContext(ToDosContext);
    return state;
    //state 를 가져다 쓰기 위해서 만들어준 함수
}

export const useDispatch = () => {
    const {dispatch} = useContext(ToDosContext);
    return dispatch;
    //dispatch를 가져다 쓰기 위행서 만들어준 함수
}

export default ToDosProvider;