

const Register = () => {
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
        .catch(console.error)

    }


    return (
        <div id="register">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" required name="username" placeholder="username"></input>
                <input type="password" required name="password" placeholder="password"></input>
                <button>Register</button>
            </form>
            <h2>Already a member? Head over to the Login page and get signed in!</h2>
        </div>
    )
}

export default Register