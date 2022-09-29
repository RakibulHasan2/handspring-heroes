import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css'
import profile from '../../Images/profile.jpg'
const Profile = (props) => {
    const addTime = props.addTime;
    let totalTime = 0;
    for(const exerciseTime of addTime){
       totalTime = totalTime + exerciseTime.time
    }
  
    const addBreak15 = () => {
    const time = document.getElementById('15s').innerText
     document.getElementById('updateTime').innerText = time;
    }
    const addBreak30 = () => {
        const time = document.getElementById('30s').innerText
         document.getElementById('updateTime').innerText = time;
        }
    const addBreak45 = () => {
            const time = document.getElementById('45s').innerText
            document.getElementById('updateTime').innerText = time;
            }
    const addBreak60 = () => {
            const time = document.getElementById('60s').innerText
            document.getElementById('updateTime').innerText = time;
            }
            //toast
            const completed = () => toast("WOAH.. You Have Finished", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
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
                    <button id='15s' onClick={addBreak15}>15s</button>
                    <button id='30s' onClick={addBreak30} >30s</button>
                    <button id='45s' onClick={addBreak45} >45s</button>
                    <button id='60s' onClick={addBreak60} >60s</button>
            </div>
            <h3>Exercise-information</h3>
            <div className='exercise-Time'>
                    <h4>Exercise Time</h4>
                    <p>{totalTime} min</p>
            </div>
            <div className='exercise-Time'>
                    <h4>Break Time</h4>
                    <p id='updateTime'>00s</p>
            </div>
            <button className='activity-completed-btn' onClick={completed}>See activity</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;