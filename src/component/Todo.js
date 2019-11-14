import React from 'react';
import { useDispatch } from '../context';


export default ({id, text, isCompleted}) => {

    const dispatch = useDispatch();

    return (
        <>
        <li>
            <span>{text}</span>
            {
                isCompleted ? 
                    (
                        <>
                            <span role="img" aria-label="" onClick={ () => dispatch({ type: "DEL_COMP", payload: id }) }>❌</span>
                            <span role="img" aria-label="" onClick={ () => dispatch({ type: "UNCOMPLETE", payload: id }) }>↩️</span> 
                        </>
                    )
                : 
                ( 
                    <>
                        <span role="img" aria-label="" onClick={ () => dispatch({ type: "DEL", payload: id }) }>❌</span>
                        <span role="img" aria-label="" onClick={ () => dispatch({ type: "COMPLETE", payload: id }) }>✅</span> 
                    </>
                )
            }
          </li>
        </>
    )
}