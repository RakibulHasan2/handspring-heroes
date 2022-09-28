import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Activity.css'

const Activity = () => {

    const [exercises, setExercises] = useState([])

    useEffect( () => {
        fetch('exercisedb.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } ,[])

    return (
        <div className='activity-container'>
            <div>
                  <h2>Select Todays Exercises</h2>  
                <div className='exercise-container'>
                {
                exercises.map( exercise => <Exercise 
                key = {exercise.id}
                exercise = {exercise}
                ></Exercise>)
                }
                </div>
            </div>
            <div className='details-container'>
               <h1>hello</h1>
            </div>
        </div>
    );
};

export default Activity;