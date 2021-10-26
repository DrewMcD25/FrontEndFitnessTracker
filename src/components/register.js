import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';


const Register = () => {
    let history = useHistory();
    const [user, setUser] = useState({username:'', password:''});
    const [password, setPassword] = useState({password:''});

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: event.target.username.value,
                    password: event.target.password.value
                
            })
        }).then(response => response.json())
        .then(result => {
            localStorage.setItem("token", result.token)
            console.log(result);
        })
        .catch(console.error);
               
        
 
    }
    async function onSubmit(event) {
        event.preventDefault()
        if(user.username.length <1 ){
            alert('username is required to register')
        }
        else if( user.password.length <1 ){
            alert('password is required to register') 
        }
        else if(user.username.length <3){
            alert('username must be longer than 3 characters')
        }
        else if(user.password.length <3){
            alert('password must be longer than 3 characters')
        }
        else{
            handleSubmit();
        }
    }

    return (
        <div id="register">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit, onSubmit}>
                <input type="text" required name="username" value={user.username} onChange={onSubmit} placeholder="username"></input>
                <input type="password" required name="password" value={user.password} onChange={onsubmit} placeholder="password"></input>
                <button>Register</button>
            </form>
            <h2>Already a member? Head over to the Login page and get signed in!</h2>
        </div>
    )
}

export default Register