import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {exercise, handleAddToProfile} = props;

    //  console.log(exercise)
   
    return (
        <div className='exercise'>
            <img src={exercise.img} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{exercise.name}</p>
                <p>{exercise.details}</p>
                <p>For Age : {exercise.age}</p>
                <p>Time Required : {exercise.time} min</p>
            </div>
            <button onClick={() => handleAddToProfile(exercise)} className='btn-cart'>
                <p>Add To list</p>
            </button>
        </div>
    );
};

export default Exercise;