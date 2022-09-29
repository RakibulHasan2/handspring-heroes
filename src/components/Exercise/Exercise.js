import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {exercise} = props;
     console.log(exercise)
    return (
        <div className='exercise'>
            <img src={exercise.img} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{exercise.name}</p>
                <p>{exercise.details}</p>
                <p>For Age : {exercise.age}</p>
                <p>Time Required : {exercise.time}s</p>
            </div>
            <button className='btn-cart'>
                <p>Add To list</p>
            </button>
        </div>
    );
};

export default Exercise;