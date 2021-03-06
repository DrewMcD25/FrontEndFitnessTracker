import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import activities from './activities';
import MyRoutines from './myroutines'

const Routines = ({ routinesList, setRoutinesList }) => {
    useEffect(function () {
        fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setRoutinesList(result)

            })
            .catch(function (error) {
                console.log("something")
                console.error(error)
            })

    }, []);
    console.log(routinesList);
    const routinesElement = routinesList.map((routines) =>
        <div id="listOfRoutines">
            <h1>User: {routines.creatorName}</h1>
            <h2>Name: {routines.name}</h2>
            <h3>goal: {routines.goal}</h3>
        </div>

    );
    return (
        <div >
            <h1 id="routinesheader">Routines</h1>
            {routinesElement}
        </div>
    )
}

export default Routines