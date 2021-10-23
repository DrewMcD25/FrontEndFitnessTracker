import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Prompt } from 'react-router'

const MyRoutines = () => {
    const [creatingActivity, setCreatingActivity] = useState(false)
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")
console.log(name, goal)

    return (
        <div id="myroutines">
            <h1>My Routines</h1>
            <button className="createAct" onClick={() => setCreatingActivity(true)} >Create Activity</button>
            {creatingActivity ? <div>
                <input type="text"onChange={(event)=>setName(event.target.value)} value={name} placeholder="Name"></input>
                <input type="text"onChange={(event)=>setGoal(event.target.value)} value={goal} placeholder="Goal"></input>
                <button onClick> Create</button></div> : null}
        </div>
    )
}
export default MyRoutines