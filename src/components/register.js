
import React, {useState} from "react";

import {Link} from 'react-router-dom';


const Register  = () => {

    const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

    const [registerUser, setRegisterUser] = useState ('');
    const [registerPassword, setRegisterPassword] = useState ('');

    async function registerToken(event) {
        event.preventDefault();
        console.log (registerUser, setRegisterPassword);
        try {
            const response = await fetch(`${BASE_URL}/users/register`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                  body: JSON.stringify({
                         user: {
                            username: registerUser,
                            password: registerPassword
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
            <form onSubmit={registerToken}>
                <input type="text"
                        value={registerUser}
                        onChange={(event)=> setRegisterUser(event.target.value)}
                        placeholder="username" />    
                <input type="password"
                        value={registerPassword}
                        onChange={(event)=> setRegisterPassword(event.target.value)}
                        placeholder="password"></input>
                <button>Register</button>
            </form>
        </div>
    )
}


export default Register;