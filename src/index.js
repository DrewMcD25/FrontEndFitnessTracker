import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/login';
import Home from './components/home'
import Activities from './components/activities'
import MyRoutines from './components/myroutines'
import Navbar from './components/navbar';
import Register from './components/register'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import './components/style/home.css'

const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }

    }

    return (
        <>
            <Router>
                <div id="navbar">
                    <Navbar />
                </div>
                <main>
                    <Switch>
                        <div>
                            <Route exact path="/login"><Login /></Route>
                            <Route exact path="/activities"><Activities/></Route>
                            <Route exact path="/myroutines"><My_Routines/></Route>
                            <Route exact path="/register"><Register /></Route>
                            <Route exact path="/"><Home /></Route>
                            <Route exact path="/routines"><Routines/></Route>
                        </div>
                    </Switch>
                </main>
            </Router>



        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));