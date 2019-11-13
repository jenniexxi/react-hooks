import React, {useReducer, useState} from 'react';
import reducer, { initialState } from './Reducer';


function App() {

  const [state, dispatch] = useReducer (reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: newToDo});
    setNewToDo("");
  }
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  }
  
  return (
    <>
      <h1>ADD to do</h1>
      <form onSubmit={onSubmit}>
        <input 
          placeholder = "Write to dos"
          onChange={onChange}
          value={newToDo}
          type="text"
        />
      </form>
      <h2>To Dos</h2>
      <ul>
        {state.toDos.map((toDo, index) => (
          <li 
            key={toDo.id}>
            <span>{toDo.text}</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type: "DEL", payload: toDo.id }) }>❌</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type: "COMPLETE", payload: toDo.id }) }>✅</span>
          </li>
        ))}
      </ul>

      <h2>Completed List</h2>
      <ul>
        {state.completed.map((toDo, index) => (
          <li 
            key={toDo.id}>
            <span>{toDo.text}</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type: "DEL_COMP", payload: toDo.id }) }>❌</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type: "UNCOMPLETE", payload: toDo.id }) }>↩️</span>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;
