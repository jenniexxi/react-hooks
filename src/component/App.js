import React from 'react';
import { useToDoState } from '../context';
import Add from './Add';
import List from './List';
import Todo from './Todo';


function App() {
  
  const state = useToDoState();

  return (
    <>
      <Add/>
      <List name="Todo">
        {state.toDos.map((toDo) => (
          <Todo 
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
          >
          </Todo>
        ))}
      </List>

      <List name="Completed List">
        {state.completed.map((toDo) => (
          <Todo 
          key={toDo.id}
          id={toDo.id}
          text={toDo.text}
          isCompleted={true}
        >
        </Todo>
        ))}
      </List>

    </>
  );
}

export default App;
