import Header from './Header';
import {UserContext} from './context';
import React, {useContext} from 'react';

function Screen() {
  //const context = useContext(UserContext); // { user, logUserIn }
  //const logUserIn = context.logUserIn;

  const {logUserIn} = useContext(UserContext);

  return (
    <div>
        <Header/>
        <h1>First screen</h1>
        <button onClick={logUserIn}>Log user</button>
    </div>
  );
}

export default Screen;
