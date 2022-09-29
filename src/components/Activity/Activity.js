import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import './Activity.css'

const Activity = () => {

    const [exercises, setExercises] = useState([])

    useEffect( () => {
        fetch('exercisedb.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } ,[])

    const [addTime, setTime] = useState([])
  
     const handleAddToProfile = (exercise) =>{
      const newTime = [...addTime, exercise]
      setTime(newTime);
     }
    return (
        <div className='activity-container'>
            <div>
                  <h2>Select Todays Exercises</h2>  
                <div className='exercise-container'>
                {
                exercises.map( exercise => <Exercise 
                key = {exercise.id}
                exercise = {exercise}
                handleAddToProfile = {handleAddToProfile}
                ></Exercise>)
                }
                </div>
            </div>
            <div className='details-container'>
               <Profile
               addTime = {addTime}
               ></Profile>
            </div>
        </div>
    );
};

export default Activity;