import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/login';
import Home from './components/home'
import Activities from './components/activities'
import MyRoutines from './components/myroutines'
import Navbar from './components/navbar';
import Register from './components/register'
import Routines from './components/routines'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import './components/style/home.css'

const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [routinesList, setRoutinesList] = useState([])
    const [activitiesList, setActivitiesList] = useState([])

    
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }

    }
console.log(routinesList)
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
                            <Route exact path="/activities"><Activities activitiesList={activitiesList} setActivitiesList={setActivitiesList}/></Route>
                            <Route exact path="/myroutines"><MyRoutines/></Route>
                            <Route exact path="/register"><Register /></Route>
                            <Route exact path="/"><Home /></Route>
                            <Route exact path="/routines"><Routines routinesList={routinesList} setRoutinesList={setRoutinesList}/></Route>
                        </div>
                    </Switch>
                </main>
            </Router>



        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));