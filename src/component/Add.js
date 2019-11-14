import React, {useState} from 'react';
import { useDispatch } from '../context';


export default () => {

    const dispatch = useDispatch();

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
        </>
    )
}

