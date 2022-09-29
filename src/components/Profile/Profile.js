import React from 'react';
import './Profile.css'
import profile from '../../Images/profile.jpg'
const Profile = (props) => {
    const addTime = props.addTime;
    let totalTime = 0;
    for(const exerciseTime of addTime){
       totalTime = totalTime + exerciseTime.time
    }
    return (
        <div className='profile'>
            <div className='profile-info'>
                <img src={profile} alt="" />
                <div>
                    <p className='profile-name'>Rakibul Hasan</p>
                    <small>Gazipura, Tongi</small>
                </div>
            </div>
            <div className='body-cart'>
               <div>
                <h2>75<small className='small-text'>kg</small></h2>
                <p>Weight</p>
               </div>
               <div>
                <h2>5.6</h2>
                <p>Height</p>
               </div>
               <div>
                <h2>75<small className='small-text'>years</small></h2>
                <p>Age</p>
               </div>
            </div>
             <h3>Add A Break</h3>
            <div className='time-break'>
                    <button>45s</button>
                    <button>60s</button>
                    <button>75s</button>
                    <button>99s</button>
            </div>
            <h3>Exercise-information</h3>
            <div className='exercise-Time'>
                    <h4>Exercise Time</h4>
                    <p>{totalTime}s</p>
            </div>
            <div className='exercise-Time'>
                    <h4>Break Time</h4>
                    <p>00s</p>
            </div>
            <button className='activity-completed-btn'>See activity</button>
        </div>
    );
};

export default Profile;