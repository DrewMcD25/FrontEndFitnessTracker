
import React, {useState} from "react";

import {Link} from 'react-router-dom';


const Login  = () => {

    const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

    const [user, setUser] = useState ('');
    const [password, setPassword] = useState ('');

    async function storeToken(event) {
        event.preventDefault();
        console.log (user, password);
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                         user: {
                            username: user,
                            password: password
      }

        })
            }); 
            const data = await response.json();
            console.log(data);
            localStorage.setItem('vb-token', data.token);
        } catch (error) {
            console.log (error);
        }
    }

    return (
        <div>
            <Link to="/">FitnessTracker</Link>
            <form onSubmit={storeToken}>
                <input type="text"
                        value={user}
                        onChange={(event)=> setUser(event.target.value)}
                        placeholder="username" />    
                <input type="password"
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        placeholder="password"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}





export default Login;