import React, {useContext} from 'react';
import { UserContext } from './context';

function Header() {
    //const user = useContext(UserContext);
    const {
        user: { name, loggedIn }
    } = useContext(UserContext);

    return (
        <div>
            {/* Hello {name} */}
            Hello {
                // 조건 ? 참 : 거짓
                loggedIn ? name : "anonymous"
            }
        </div>
    );
}

export default Header;
